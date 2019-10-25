import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Media from 'react-media';
import { mediaQueries } from 'model';
import './MasterDetail.scss';

export interface MasterDetailProps {
    MasterType: any,
    masterProps: any,
    DetailType:  any,
    detailProps: any
}

export const MasterDetail: React.FunctionComponent<MasterDetailProps> = (props) => {
    let { path } = useRouteMatch() as any;
    const master = (
        <props.MasterType {...props.masterProps}
            data-test="Master" />);
    const detail = (
        <props.DetailType {...props.detailProps} 
            data-test="Detail" />);

    return ( 
        <Media query={mediaQueries.md}>
            {matches =>
                matches ? (
                    <Switch>
                        <Route exact path={`${path}`}>
                            {master}
                        </Route>
                        <Route path={`${path}/detail/:id`}>
                            {detail}
                        </Route>
                    </Switch>
                ) : (
                    <section className="master-detail">
                        <section className="master-detail__master">
                            <Route path={`${path}`}>
                                {master}
                            </Route>
                        </section>
                        <section className="master-detail__detail">
                            <Switch>
                                <Route exact path={`${path}`}>
                                    {detail} 
                                </Route>
                                <Route path={`${path}/detail/:id`}>
                                    {detail}
                                </Route>
                            </Switch>
                        </section>
                    </section>
                    )
            }
        </Media>
    );
};