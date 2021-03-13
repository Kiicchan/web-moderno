import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} /> {/*exact faz com q o caminho só seja aceito se for um valor exato em path */}
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>