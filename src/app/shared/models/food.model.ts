export class Food {
  id: number = 1;
  price!: number;
  name!: string;
  favourite: boolean = false;
  star: number = 0;
  tags?: string[];
  imageUrl!: string;
  cookTime!: string;
  origins!: string[];
}
