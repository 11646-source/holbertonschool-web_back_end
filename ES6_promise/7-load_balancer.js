export default function loadBalancer(chinaDownload, UsDown load) {
	return Promise.race([chinaDownload, USDownload]);
}
