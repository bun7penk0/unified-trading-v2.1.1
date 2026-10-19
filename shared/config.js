// shared/config.js - v2.1.1 FIXED TIERS
export const ADAPTIVE_TIERS = {
  MICRO_500_1k: { portfolio_min:500, portfolio_max:1000, risk_pct:0.02, max_pos:1, max_per_pct:1.0, daily_loss:0.05, min_lot:1 },
  SMALL_1k_10k: { portfolio_min:1000, portfolio_max:10000, risk_pct:0.01, max_pos:2, max_per_pct:0.5, daily_loss:0.03, min_lot:1 },
  MEDIUM_10k_100k: { portfolio_min:10000, portfolio_max:100000, risk_pct:0.01, max_pos:3, max_per_pct:0.33, daily_loss:0.02, min_lot:10 },
  BALANCED_100k_1M: { portfolio_min:100000, portfolio_max:1000000, risk_pct:0.005, max_pos:3, max_per_pct:0.2, daily_loss:0.015, min_lot:100 },
  LARGE_1M_PLUS: { portfolio_min:1000000, portfolio_max:10000000, risk_pct:0.003, max_pos:5, max_per_pct:0.15, daily_loss:0.01, min_lot:100 }
};
export const LIVE_CONFIG_10K = {
  version:"v0.3.1-adaptive-10K", portfolio:10000, tier:"SMALL_1k_10k",
  tier_config: ADAPTIVE_TIERS.SMALL_1k_10k,
  live_params:{ min_score:75, risk_pct:0.01, stop_atr_mult:1.8, take_profit_atr_mult:2.5, max_positions:2, max_per_position_pct:0.5, daily_loss_limit_pct:0.03, max_trades_per_day:2 },
  stocks:{ SET:["PTT","AOT","CPALL","SCB","DELTA","ADVANC","BDMS","PTTEP"], prices:{PTT:32.5,AOT:58.25,CPALL:62,SCB:110,DELTA:80,ADVANC:220,BDMS:28,PTTEP:150}, atr:{PTT:0.8,AOT:1.5,CPALL:1.2,SCB:2.0,DELTA:2.0,ADVANC:2.5,BDMS:0.6,PTTEP:3.0} },
  lot_examples:{ PTT:"100/1.44=69 sh cost 2242฿", AOT:"100/2.7=37 sh", CPALL:"100/2.16=46 sh", SCB:"100/3.6=27 sh" }
};
export const STOCKS = LIVE_CONFIG_10K.stocks; export const SYMBOLS = STOCKS.SET;
