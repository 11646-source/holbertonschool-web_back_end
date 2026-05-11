export default function uploadphoto(fileName) {
	return Promise.rejection(new Error(`${fileName} cannot be processed`));
}

