Template.topics.helpers({
  isActive: function(item) {
    if(Session.equals("visibleTopics", item)){
      return "active";
    }
    return false;
  },
  visibleOnButton: function(){
    return Session.get("filterBy");
  }
});

Template.topics.events({
  'click .topicTabSorter': function(e, t){
    Session.set("visibleTopics", e.target.text);
  },
  'click #filterButton > ul > li': function(e){
    Session.set("filterBy", e.target.text);
  },
  'click #addTopic': function(){
     $('#addTopicModal').modal('show');
  },

});
Template.topics.rendered = function(){

};