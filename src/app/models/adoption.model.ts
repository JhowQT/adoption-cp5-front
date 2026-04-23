export interface Adoption {
  id: number;
  userId: number;
  animalId: number;
  status: string;
  requestDate: string;
  approvalDate: string;
  aiScore: number;
  notes: string;
}