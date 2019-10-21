import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Media from 'react-media';
import { mediaQueries } from 'model';
import './MasterDetail.scss';

export const masterDetailHOC = <X,Y>(
    MasterComponent: any, 
    DetailComponent: any, 
    masterProps?: X, detailProps?: Y) => {

    return function(props: any) {
        let { path } = useRouteMatch() as any;
        return ( 
            <Media query={mediaQueries.md}>
                {matches =>
                    matches ? (
                        <Switch>
                            <Route exact path={`${path}`}>
                                <MasterComponent {...props} {...masterProps}
                                    data-test="Master" />
                            </Route>
                            <Route path={`${path}/detail/:id`}>
                                <DetailComponent {...props} {...detailProps} 
                                    data-test="Detail" />
                            </Route>
                        </Switch>
                    ) : (
                        <section className="master-detail">
                            <section className="master-detail__master">
                                <Route path={`${path}`}>
                                    <MasterComponent {...props} {...masterProps}
                                        data-test="Master" />
                                </Route>
                            </section>
                            <section className="master-detail__detail">
                                <Switch>
                                    <Route exact path={`${path}`}>
                                        <DetailComponent {...detailProps} 
                                            data-test="Detail" />  
                                    </Route>
                                    <Route path={`${path}/detail/:id`}>
                                        <DetailComponent {...props} {...detailProps}
                                            data-test="Detail" />  
                                    </Route>

                                </Switch>
                                
                            </section>
                        </section>
                        )
                }
            </Media>
        );
    }
};