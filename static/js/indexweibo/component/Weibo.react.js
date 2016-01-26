'use strict';
var React = require('react');
var WeiboAction = require('../action/WeiboAction');
var WeiboStore = require('../store/WeiboStore');
var CommentInput = React.createClass({
  putvalue:function() {
  },
      render: function() {
        return (
          <input className="Winput" placeholder="请输入内容" onChange={this.putvalue} ref="postvalue"/>
        );
      }
    });
var SubmitContent = React.createClass({
  weiboPost:function() {
    
  },
  render:function() {
    return (
      <button onClick={this.weiboPost}>提交</button>
      )
  }
});
var Content = React.createClass({
  getInitialState:function() {
    WeiboAction.contentInit();
    return {
      data:'[]'
        }
  },
  dataChanged:function() {
    var alldata=WeiboStore.getAll();
    console.log(alldata,typeof alldata);
    this.setState({data:alldata['init']})
  },
  componentDidMount:function() {
    WeiboStore.bind( 'change', this.dataChanged );
  },
  componentWillUnmount: function() {  
    WeiboStore.unbind( 'change', this.dataChanged );
  },
  render: function() {
    var fffDDD=JSON.parse(this.state.data);

    var trueData=fffDDD.map(function(singalWeibo) {
      return (<div>{singalWeibo['name']},{singalWeibo['content']}</div>)
    })
    return (<div>{trueData}</div>)
    
  }
})
var Container = React.createClass({
  render:function() {
    return (
      <div className="container">
      <CommentInput />
      <SubmitContent />
      <Content />
      </div>
    );
  }
});
React.render(
      <Container />,
      document.getElementById('example')
    );