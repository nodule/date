module.exports = {
  name: "getHours",
  ns: "date",
  title: "Get Hours",
  async: true,
  description: "The hour (0-23) in the specified date according to local time.",
  phrases: {
    active: "Getting Hours"
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
              out: $.write('in', $.in.getHours())
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
        title: "Hour",
        type: "number",
        description: "The hour (0-23) in the specified date according to local time."
      }
    }
  },
  state: {}
}