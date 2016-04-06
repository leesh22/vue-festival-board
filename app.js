new Vue ({
  el: '#events',

  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },

  //anthing in here will run when the application loads
  ready: function(){
    this.fetchEvents();
  },

  methods: {
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'Sidewinder Festival',
          description: 'Sidewinder Summer Festival 2016',
          date: '2016-08-14'
        },
        {
          id: 2,
          name: 'Wireless Festival',
          description: 'The capitals pop and urban weekender.',
          date: '2016-07-08'
        },
        {
          id: 3,
          name: '51st State Festival',
          description: '51st State Festival returns once again to Londons Trent Park exploring the roots of house music.',
          date: '2016-08-06'
        }
      ];
      //set is similar to pushing data onto an array
      this.$set('events', events);
    },

    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this Festival?")) {
        this.events.splice(index,1);
      }
    }
  }
});
