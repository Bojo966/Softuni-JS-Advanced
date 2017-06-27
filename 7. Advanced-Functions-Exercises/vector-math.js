let solution = (function() {
    return {
        add: function(vector1, vector2) {
            return [vector1[0] + vector2[0], vector1[1] + vector2[1]]
        },
        multiply: function(vec1, scalar) {
            return [vec1[0] * scalar, vec1[1] * scalar]
        },
        length(vec1) {
            return Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2))
        },
        dot(vec1, vec2) {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1]
        },
        cross(vec1, vec2) {
            return vec1[0] * vec2[1] - vec1[1] * vec2[0]
        }
    }
})()

console.log(solution.cross([3, 7], [1, 0]))