export interface AdminTask {
  id: number;
  taskName: string;
  assigned: boolean;
}

export interface CreateAdminTask {
  userId: string;
  tasks?: AdminTask[];
}
