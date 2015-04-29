describe("ticklerApp", function () {
  it("has a calendar", function() {
    var app = new Rolodex();
    expect(app.calendar).toBeDefined();
  });
});