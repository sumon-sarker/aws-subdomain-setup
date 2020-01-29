import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator, Image, FlatList, SafeAreaView } from 'react-native';

class CategoryPosts extends Component {

  constructor(props){
    super(props);
    this.state = {
      isFetching: false,
      contentLoading: true,
      contents: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.setState({
      contents:json,
      contentLoading:false
    }));
  }

  onRefresh = ()=> {
     this.setState({ isFetching: true }, function() {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        isFetching: false,
        contents:json,
        contentLoading:false
      }));
     });
  }

  render() {

    if (this.state.contentLoading) {
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          /*Pull to refresh*/
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          
          data={this.state.contents}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    )
  }
}

export default class Dashboard extends Component {

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Header style={GlobalStylesheet.header}>
          <Left>
            <Button transparent onPress={()=>{this.props.navigator.openDrawer()}}>
              <Icon name='menu' style={GlobalStylesheet.headerIcon} />
            </Button>
          </Left>
          <Body>
            <Image source={require('../assets/headerlogo.png')} style={{width:'70%',resizeMode:'contain'}} />
          </Body>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab tabsContainerStyle={GlobalStylesheet.homepageTabs} />}>
          <Tab heading="LAST UPDATES">
            <CategoryPosts category={1} />
          </Tab>
          <Tab heading="NATIONAL">
            <CategoryPosts category={2} />
          </Tab>
          <Tab heading="WORLD">
            <CategoryPosts category={3} />
          </Tab>
          <Tab heading="BUSINESS">
            <CategoryPosts category={4} />
          </Tab>
          <Tab heading="SPORTS">
            <CategoryPosts category={5} />
          </Tab>
        </Tabs>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container : {
    flex:1,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: StatusBar.currentHeight
      },
    })
  }
})
