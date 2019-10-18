import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Media from 'react-media';
import './MasterDetail.scss';

export const masterDetailHOC = (MasterComponent: any, DetailComponent: any) => {
    return function(props: any) {
        let { path } = useRouteMatch() as any;
        return ( 
            <Media query="(max-width: 599px)">
                {matches =>
                    matches ? (
                        <Switch>
                            <Route exact path={`${path}`}>
                                <MasterComponent {...props}/>
                            </Route>
                            <Route path={`${path}/detail/:id`}>
                                <DetailComponent {...props} />
                            </Route>
                        </Switch>
                    ) : (
                        <section className="master-detail">
                            <section className="master-detail__master">
                                <Route path={`${path}`}>
                                    <MasterComponent {...props} />
                                </Route>
                            </section>
                            <section className="master-detail__detail">
                                <Switch>
                                    <Route exact path={`${path}`}>
                                        <DetailComponent />  
                                    </Route>
                                    <Route path={`${path}/detail/:id`}>
                                        <DetailComponent {...props} />  
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