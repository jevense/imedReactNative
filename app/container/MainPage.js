import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {DrawerNavigator, StackNavigator, withNavigation} from 'react-navigation';
import Home from "../component/TabNavigator"
import Person from "../component/Person/index";
import ContentComponent from '../component/ContentComponent'

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
const MainMenu = DrawerNavigator({

    Home: {
        screen: Home,
    },
    Person: {
        screen: Person,
    }
}, {
    drawerWidth: 300, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: ContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: Home, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});

export default MainMenu
