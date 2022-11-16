import Queue from "./Queue";

const DI = [0, -1, 0, 1];
const DJ = [1, 0, -1, 0];

function bfs_initialize(i, j, n, m) {
	let queue = new Queue();
	queue.push([i, j]);
	let distances = new Array(n).fill(0).map(() => new Array(m).fill(n * m));
	distances[i][j] = 0;
	const visited = new Array(n).fill(0).map(() => new Array(m).fill(0));
	return [queue, distances, visited];
}

function bfs_one_operation(queue, distances, visited) {
	if (queue.length === 0) {
		return false;
	} else {
		const [i, j] = queue.pop();
		if (!visited[i][j]) {
			for (let d = 0; d < 4; ++d) {
				const i_to = i + DI[d],
					j_to = j + DJ[d];
				if (distances[i_to][j_to] > distances[i][j] + 1) {
					distances[i_to][j_to] = distances[i][j] + 1;
					queue.push([i_to, j_to]);
				}
			}
			visited[i][j] = true;
		}
		return true;
	}
}
