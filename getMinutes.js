module.exports = {
  name: "getMinutes",
  ns: "date",
  title: "Get Minutes",
  async: true,
  description: "The minutes (0-59) in the specified date according to local time.",
  phrases: {
    active: "Getting Minutes"
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
              out: data.getMinutes()
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
        title: "Minutes",
        type: "number",
        description: "The minutes (0-59) in the specified date according to local time."
      }
    }
  },
  state: {}
}