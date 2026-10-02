export type FindingKind = 'incident' | 'privacy' | 'observability';
export interface Finding { kind: FindingKind; rule: string; line: number; message: string; evidence: string; }
export interface LogReport { lines: number; errors: number; findings: Finding[]; score: number; verdict: 'healthy' | 'review' | 'incident'; }
