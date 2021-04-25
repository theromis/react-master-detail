import { Items, Item } from './example.model';
import { AppStore } from './store';

export const getExampleItems = (store: AppStore): Items => {
    return { items: store.example.ids.map((id:number) => store.example.items[id]) };
};

export const getExampleById = (store: AppStore, id: string): { item: Item | null } => {
    const actualId: number = parseInt(id, 10);
   
    return { item : store.example.items[actualId] };
};
