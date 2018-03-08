import React, {Component} from 'react'
import {Modal, StatusBar, StyleSheet,} from 'react-native'
import Drawer from "react-native-drawer";
import {connect} from "react-redux";
import Container from "./Container";
import Side from "./Side";


class Reader extends Component<{}> {

    constructor(props) {
        super(props);
    };

    render() {
        let {navigation, readerOpened, bookId, chapter: {chapterData, bookName},} = this.props;
        return (
            <Modal
                animationType={"fade"}
                visible={readerOpened}
                onRequestClose={() => {
                    // alert("Modal has been closed.")
                }}
            >
                <Drawer
                    acceptPan={false}
                    openDrawerOffset={100}
                    tapToClose={true}
                    ref={(ref) => this.drawer = ref}
                    content={<Side {...{chapterData, bookName}}/>}
                >
                    <Container {...{navigation, bookId,}}
                               drawer={() => (this.drawer)}
                    />
                </Drawer>
                <StatusBar hidden translucent={false}/>
            </Modal>
        )
    }
}

export default connect(
    (state) => ({
        readerOpened: state.reader.readerOpened,
        bookId: state.reader.bookId,
        chapter: state.reader.chapter,
    })
)(Reader)

const styles = StyleSheet.create({});
