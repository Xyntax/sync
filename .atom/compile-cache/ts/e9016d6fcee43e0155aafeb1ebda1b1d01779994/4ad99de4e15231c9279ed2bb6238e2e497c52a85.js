var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
})();
;
var greeter = new Greeter("Hello, world!");
console.log(greeter.greet());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveHkvLmF0b20vcGFja2FnZXMvc2NyaXB0L2V4YW1wbGVzL2dyZWV0ZXIudHMiLCJzb3VyY2VzIjpbIi9ob21lL3h5Ly5hdG9tL3BhY2thZ2VzL3NjcmlwdC9leGFtcGxlcy9ncmVldGVyLnRzIl0sIm5hbWVzIjpbIkdyZWV0ZXIiLCJHcmVldGVyLmNvbnN0cnVjdG9yIiwiR3JlZXRlci5ncmVldCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxPQUFPO0lBQ1hBLFNBRElBLE9BQU9BLENBQ1FBLFFBQWdCQTtRQUFoQkMsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBUUE7SUFBSUEsQ0FBQ0E7SUFDeENELHVCQUFLQSxHQUFMQTtRQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFDSEYsY0FBQ0E7QUFBREEsQ0FBQ0EsQUFMRCxJQUtDO0FBQUEsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHcmVldGVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIGdyZWV0aW5nOiBzdHJpbmcpIHsgfVxuICBncmVldCgpIHtcbiAgICByZXR1cm4gdGhpcy5ncmVldGluZztcbiAgfVxufTtcblxudmFyIGdyZWV0ZXIgPSBuZXcgR3JlZXRlcihcIkhlbGxvLCB3b3JsZCFcIik7XG5cbmNvbnNvbGUubG9nKGdyZWV0ZXIuZ3JlZXQoKSk7XG4iXX0=
//# sourceURL=/home/xy/.atom/packages/script/examples/greeter.ts