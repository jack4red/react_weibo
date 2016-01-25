'use strict';
var React = require('react');
var CommentInput = React.createClass({
      render: function() {
        return (
          <input className="Winput" placeholder="请输入内容" />
        );
      }
    });
var SubmitContent = React.createClass({
  render:function() {
    return (
      <button>提交</button>
      )
  }
});
var Content = React.createClass({
  getInitialState:function() {
    var _this=this;
    $.ajax({
      url:'/init',
      success:function(resp) {
        var data = JSON.stringify(resp.data);
        _this.setState({data:data});
      }
    });
    return {
        }
  },
  ishavedate:function() {
    return true
  },
  componentWillMount:function() {

  },
  render: function() {
    if (this.ishavedate()) {
      // var dates=JSON.parse(this.state.date);
      console.log(this.state.data);
      return (
        <div>666
        </div>
      );
    };
    
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