export enum Subject {
  MATH = 'Toán Học',
  PHYSICS = 'Vật Lý',
  CHEMISTRY = 'Hóa Học'
}

export interface AiResponse {
  tab1_quick: string;
  tab2_detail: string;
  tab3_quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}
