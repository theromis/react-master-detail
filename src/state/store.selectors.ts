import { Items, Item } from './example.model';
import { AppStore } from './store';

export const getExampleItems = (store: AppStore): Items => {
    return { items: store.example.ids.map((id:number) => store.example.items[id]) };
};

export const getExampleById = (store: AppStore, ownProps: any): { item: Item|null } => {
    return { item : (ownProps.match.params && ownProps.match.params.id) ? 
        store.example.items[ownProps.match.params.id] : null
    };
};
