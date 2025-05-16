export interface Clock {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ClockError {
  errorMessage: string;
}

export interface UpdateClock {
  updateTime: () => void;
}