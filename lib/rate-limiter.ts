/**
 * Rate Limiter In-Memory haute performance (Sliding Window Algorithm).
 * Protège les routes d'API contre le déni de service (DDoS) et le spam automatisé.
 */

interface RateLimitRecord {
  count: number;
  firstRequestTime: number;
  lastRequestTime: number;
}

class InMemoryRateLimiter {
  private requests: Map<string, RateLimitRecord> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;
  private lastCleanup: number = Date.now();

  constructor(maxRequests: number = 5, windowMs: number = 10 * 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  public check(identifier: string): {
    success: boolean;
    limit: number;
    remaining: number;
    resetTime: number;
  } {
    const now = Date.now();
    this.autoCleanup(now);

    const record = this.requests.get(identifier);

    if (!record) {
      this.requests.set(identifier, {
        count: 1,
        firstRequestTime: now,
        lastRequestTime: now,
      });
      return {
        success: true,
        limit: this.maxRequests,
        remaining: this.maxRequests - 1,
        resetTime: now + this.windowMs,
      };
    }

    // Si la fenêtre temporelle est expirée, on réinitialise le compteur
    if (now - record.firstRequestTime > this.windowMs) {
      record.count = 1;
      record.firstRequestTime = now;
      record.lastRequestTime = now;
      return {
        success: true,
        limit: this.maxRequests,
        remaining: this.maxRequests - 1,
        resetTime: now + this.windowMs,
      };
    }

    // Si la limite est dépassée
    if (record.count >= this.maxRequests) {
      return {
        success: false,
        limit: this.maxRequests,
        remaining: 0,
        resetTime: record.firstRequestTime + this.windowMs,
      };
    }

    // Incrémentation de la requête
    record.count += 1;
    record.lastRequestTime = now;

    return {
      success: true,
      limit: this.maxRequests,
      remaining: this.maxRequests - record.count,
      resetTime: record.firstRequestTime + this.windowMs,
    };
  }

  private autoCleanup(now: number): void {
    // Nettoyage toutes les 5 minutes pour éviter toute fuite mémoire
    if (now - this.lastCleanup > 5 * 60 * 1000) {
      this.lastCleanup = now;
      for (const [key, record] of this.requests.entries()) {
        if (now - record.firstRequestTime > this.windowMs) {
          this.requests.delete(key);
        }
      }
    }
  }
}

// Instance globale du rate limiter pour la route de contact (5 requêtes par tranche de 10 minutes)
export const contactRateLimiter = new InMemoryRateLimiter(5, 10 * 60 * 1000);
