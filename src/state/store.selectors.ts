import { Items, Item } from './example.model';
import { AppStore } from './store';

export const getExampleItems = (store: AppStore): Items => {
    return { items: store.example.ids.map((id:number) => store.example.items[id]) };
};

export const getExampleById = (store: AppStore, id: number | string | undefined): { item: Item | null } => {
    const actualId = (typeof id === 'string') ?
        parseInt(id, 10): id;
   
    return { item : actualId ? 
        store.example.items[actualId] : null
    };
};
