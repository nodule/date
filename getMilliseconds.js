module.exports = {
  name: "getMilliseconds",
  ns: "date",
  title: "Getting Milliseconds",
  async: true,
  description: "The milliseconds (0-999) in the specified date according to local time.",
  phrases: {
    active: "Getting Milliseconds"
  },
  ports: {
    input: {
      date: {
        title: "Date",
        type: "Date",
        async: true,
        fn: function __DATE__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: data.getMilliseconds()
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Milliseconds",
        type: "number",
        description: "The milliseconds (0-999) in the specified date according to local time."
      }
    }
  },
  state: {}
}