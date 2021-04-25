import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router-dom'; 
import { useRouteMatch } from 'react-router-dom';
import { Header, ListItemLink } from 'components';
import { Items, Item, getExampleItems, AppStore } from 'state';
import {CellMeasurerCache, InfiniteLoader, List, AutoSizer} from 'react-virtualized';

export interface MasterProps extends Items {
}

export const MasterContainer: React.FC<MasterProps> = (props) => {
    var mostRecentWidth: number;
    var list: any;
    var cache = new CellMeasurerCache({
        fixedWidth: true,
    });
    let { path } = useRouteMatch() as RouteProps;
    let { items } = useSelector((store: AppStore) => getExampleItems(store));
    const loadMoreRows = async () => {
        console.log("Load more masters ...")
    }
    /*
    const listItems = items.map((item: Item) =>
        <li key={item.id}>
            <ListItemLink 
                to={`${path}/detail/${item.id}`} item={item} />
        </li>
    );
    */
    //const rowCount = items.length;
    const rowCount = 100;
    console.log(`rowCount: ${rowCount}`);
    const isRowLoaded = (params: any) => {
        //console.log(`isRowLoaded: ${JSON.stringify(params)} ${items.length}`)
        return params.index < items.length;
    }
    const rowHeight = (params: any) => {
        //console.log(`rowHeight: ${params.index}`);
        if (!isRowLoaded(params)) {
            return 20;
        }
        return 110;
    }

    const rowRenderer = (params: any) => {
        //console.log(`rowRenderer: ${params.index}`);

        if (!isRowLoaded(params)) {
            return (
                <li key={params.index}>
                Loading...
                </li>
            );
        } else {
            let item = items[params.index];
            const id = item ? item.id : "-"
            return (
                <li
                key={params.index}
                style={params.style}
            >
                <ListItemLink 
                to={`${path}/detail/${id}`} item={item} />
                </li>
            );
        }
    };
    return (
            /*
        React.createElement(
            React.Fragment,
            {},
            React.createElement(
                Header,
                {
                    title:"Master",
                    hideBackButton: true
                },
                React.createElement(
                    AutoSizer,
                    null,
                    function(
                        autoSizerParams: any,
                    ) {
                        if (mostRecentWidth && mostRecentWidth !== autoSizerParams.width) {
                            cache.clearAll();
                            list.recomputeRowHeights();
                        }

                        mostRecentWidth = autoSizerParams.width;
                        return (
                            React.createElement(
                                InfiniteLoader,
                                {
                                    children: function(
                                        props: any
                                    ) {
                                        return React.createElement(
                                            List,
                                            {
                                                noRowsRenderer: noRowsRenderer1,
                                                ref: function(ref: any) {
                                                    list = ref;
                                                },
                                                onRowsRendered: props.onRowsRendered,
                                                rowRenderer: rowRenderer,
                                                rowCount: rowCount,
                                                height: autoSizerParams.height,
                                                width: autoSizerParams.width,
                                                rowHeight: 500
                                            }
                                        )
                                    },
                                    isRowLoaded: isRowLoaded,
                                    loadMoreRows: loadMoreRows,
                                    rowCount: rowCount
                                },
                            )
                        );
                    })
            )
        )
        */
        <React.Fragment>
            <Header title="Master" hideBackButton={true}/>
              <AutoSizer>
                {({height, width}) => (
                        <InfiniteLoader
                  isRowLoaded={isRowLoaded}
                  loadMoreRows={loadMoreRows}
                  rowCount={rowCount}>
                  {({onRowsRendered, registerChild}) => (
                    <List
                      ref={registerChild}
                      onRowsRendered={onRowsRendered}
                      rowRenderer={rowRenderer}
                      rowCount={rowCount}
                      height={height}
                      width={width}
                      rowHeight={rowHeight}
                    />
                  )}
                </InfiniteLoader>
                )}
              </AutoSizer>
        </React.Fragment>
    );
};
