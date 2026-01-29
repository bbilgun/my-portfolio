export interface CanvasNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface LineConfig {
  spring?: number;
}

export interface CanvasConfig {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

export interface WaveConfig {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

export interface Position {
  x: number;
  y: number;
}
