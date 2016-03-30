module.exports = {
  name: "getMonth",
  ns: "date",
  title: "Get Month",
  async: true,
  description: "The month (0-11) in the specified date according to local time.",
  phrases: {
    active: "Getting Month"
  },
  ports: {
    input: {
      "in": {
        title: "Date",
        type: "Date",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', $.in.getMonth())
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
        title: "Month",
        type: "number",
        description: "The month (0-11) in the specified date according to local time."
      }
    }
  },
  state: {}
}