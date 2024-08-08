
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t<!-- Google Font: Source Sans Pro -->\r\n\t<link rel=\"stylesheet\"\r\n\t\thref=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback\">\r\n\t<!-- Font Awesome -->\r\n\t<link rel=\"stylesheet\" href=\"plugins/fontawesome-free/css/all.min.css\">\r\n\t<!-- Ionicons -->\r\n\t<link rel=\"stylesheet\" href=\"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\">\r\n\t<!-- Tempusdominus Bootstrap 4 -->\r\n\t<link rel=\"stylesheet\" href=\"plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css\">\r\n\t<!-- iCheck -->\r\n\t<link rel=\"stylesheet\" href=\"plugins/icheck-bootstrap/icheck-bootstrap.min.css\">\r\n\t<!-- JQVMap -->\r\n\t<link rel=\"stylesheet\" href=\"plugins/jqvmap/jqvmap.min.css\">\r\n\t<!-- Theme style -->\r\n\t<link rel=\"stylesheet\" href=\"dist/css/adminlte.min.css\">\r\n\t<!-- overlayScrollbars -->\r\n\t<link rel=\"stylesheet\" href=\"plugins/overlayScrollbars/css/OverlayScrollbars.min.css\">\r\n\t<!-- Daterange picker -->\r\n\t<link rel=\"stylesheet\" href=\"plugins/daterangepicker/daterangepicker.css\">\r\n\t<!-- summernote -->\r\n\t<link rel=\"stylesheet\" href=\"plugins/summernote/summernote-bs4.min.css\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t" + head + "\r\n</head>\r\n\r\n<body class=\"hold-transition sidebar-mini layout-fixed\">\r\n\t<div class=\"wrapper\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</div>\r\n\r\n\r\n\r\n\t<!-- jQuery -->\r\n\t<script src=\"plugins/jquery/jquery.min.js\"></script>\r\n\t<!-- jQuery UI 1.11.4 -->\r\n\t<script src=\"plugins/jquery-ui/jquery-ui.min.js\"></script>\r\n\t<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->\r\n\t<script>\r\n\t\t$.widget.bridge('uibutton', $.ui.button)\r\n\t</script>\r\n\t<!-- Bootstrap 4 -->\r\n\t<script src=\"plugins/bootstrap/js/bootstrap.bundle.min.js\"></script>\r\n\t<!-- ChartJS -->\r\n\t<script src=\"plugins/chart.js/Chart.min.js\"></script>\r\n\t<!-- Sparkline -->\r\n\t<script src=\"plugins/sparklines/sparkline.js\"></script>\r\n\t<!-- JQVMap -->\r\n\t<script src=\"plugins/jqvmap/jquery.vmap.min.js\"></script>\r\n\t<script src=\"plugins/jqvmap/maps/jquery.vmap.usa.js\"></script>\r\n\t<!-- jQuery Knob Chart -->\r\n\t<script src=\"plugins/jquery-knob/jquery.knob.min.js\"></script>\r\n\t<!-- daterangepicker -->\r\n\t<script src=\"plugins/moment/moment.min.js\"></script>\r\n\t<script src=\"plugins/daterangepicker/daterangepicker.js\"></script>\r\n\t<!-- Tempusdominus Bootstrap 4 -->\r\n\t<script src=\"plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js\"></script>\r\n\t<!-- Summernote -->\r\n\t<script src=\"plugins/summernote/summernote-bs4.min.js\"></script>\r\n\t<!-- overlayScrollbars -->\r\n\t<script src=\"plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js\"></script>\r\n\t<!-- AdminLTE App -->\r\n\t<script src=\"dist/js/adminlte.js\"></script>\r\n\t<!-- AdminLTE for demo purposes -->\r\n\t<script src=\"dist/js/demo.js\"></script>\r\n\t<!-- AdminLTE dashboard demo (This is only for demo purposes) -->\r\n\t<script src=\"dist/js/pages/dashboard.js\"></script>\r\n</body>\r\n\r\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "cw8xdh"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
