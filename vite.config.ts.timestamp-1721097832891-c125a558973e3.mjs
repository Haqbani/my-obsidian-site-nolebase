// vite.config.ts
import { defineConfig } from "file:///Users/admin/Desktop/mohammed/my-obsidian-site-nolebase/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.11_less@4.2.0/node_modules/vite/dist/node/index.js";
import Components from "file:///Users/admin/Desktop/mohammed/my-obsidian-site-nolebase/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.5_rollup@4.17.2_vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import UnoCSS from "file:///Users/admin/Desktop/mohammed/my-obsidian-site-nolebase/node_modules/.pnpm/unocss@0.58.9_postcss@8.4.38_rollup@4.17.2_vite@5.2.11_@types+node@20.12.11_less@4.2.0_/node_modules/unocss/dist/vite.mjs";
import Inspect from "file:///Users/admin/Desktop/mohammed/my-obsidian-site-nolebase/node_modules/.pnpm/vite-plugin-inspect@0.8.4_rollup@4.17.2_vite@5.2.11_@types+node@20.12.11_less@4.2.0_/node_modules/vite-plugin-inspect/dist/index.mjs";
import { GitChangelog, GitChangelogMarkdownSection } from "file:///Users/admin/Desktop/mohammed/my-obsidian-site-nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-git-changelog@2.0.0-rc11_vitepress@1.1.4_@algolia+client-search@4._i6kblx2r7erzldb37pv7i6xhvi/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import { PageProperties, PagePropertiesMarkdownSection } from "file:///Users/admin/Desktop/mohammed/my-obsidian-site-nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-page-properties@2.0.0-rc11_vitepress@1.1.4_@algolia+client-search@_zjqcbgrf6o3zw2rfo5vmlkhstu/node_modules/@nolebase/vitepress-plugin-page-properties/dist/vite/index.mjs";
import { ThumbnailHashImages } from "file:///Users/admin/Desktop/mohammed/my-obsidian-site-nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-thumbnail-hash@2.0.0-rc11_vitepress@1.1.4_@algolia+client-search@4_3gxcv2pkvkkwls3ty4oni6bf2q/node_modules/@nolebase/vitepress-plugin-thumbnail-hash/dist/vite/index.mjs";

// metadata/index.ts
var githubRepoLink = "https://github.com/nolebase/nolebase";
var plainTargetDomain = "nolebase.ayaka.io";
var targetDomain = `https://${plainTargetDomain}`;

// vite.config.ts
var vite_config_default = defineConfig(async () => {
  return {
    assetsInclude: ["**/*.mov"],
    optimizeDeps: {
      // vitepress is aliased with replacement `join(DIST_CLIENT_PATH, '/index')`
      // This needs to be excluded from optimization
      exclude: [
        "vitepress"
      ]
    },
    plugins: [
      Inspect(),
      GitChangelog({
        repoURL: () => githubRepoLink
      }),
      GitChangelogMarkdownSection({
        getChangelogTitle: () => {
          return "Change Log";
        },
        getContributorsTitle: () => {
          return "Contributors";
        },
        excludes: [
          "toc.md",
          "index.md"
        ]
      }),
      PageProperties(),
      PagePropertiesMarkdownSection({
        excludes: [
          "toc.md",
          "index.md"
        ]
      }),
      ThumbnailHashImages(),
      Components({
        include: [/\.vue$/, /\.md$/],
        dirs: ".vitepress/theme/components",
        dts: ".vitepress/components.d.ts"
      }),
      UnoCSS()
    ],
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
        "@nolebase/vitepress-plugin-inline-link-preview"
      ]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWV0YWRhdGEvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWRtaW4vRGVza3RvcC9tb2hhbW1lZC9teS1vYnNpZGlhbi1zaXRlLW5vbGViYXNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWRtaW4vRGVza3RvcC9tb2hhbW1lZC9teS1vYnNpZGlhbi1zaXRlLW5vbGViYXNlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL21vaGFtbWVkL215LW9ic2lkaWFuLXNpdGUtbm9sZWJhc2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuXG5pbXBvcnQgeyBHaXRDaGFuZ2Vsb2csIEdpdENoYW5nZWxvZ01hcmtkb3duU2VjdGlvbiB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWdpdC1jaGFuZ2Vsb2cvdml0ZSdcbmltcG9ydCB7IFBhZ2VQcm9wZXJ0aWVzLCBQYWdlUHJvcGVydGllc01hcmtkb3duU2VjdGlvbiB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLXBhZ2UtcHJvcGVydGllcy92aXRlJ1xuaW1wb3J0IHsgVGh1bWJuYWlsSGFzaEltYWdlcyB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLXRodW1ibmFpbC1oYXNoL3ZpdGUnXG5cbmltcG9ydCB7IGdpdGh1YlJlcG9MaW5rIH0gZnJvbSAnLi9tZXRhZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhc3NldHNJbmNsdWRlOiBbJyoqLyoubW92J10sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAvLyB2aXRlcHJlc3MgaXMgYWxpYXNlZCB3aXRoIHJlcGxhY2VtZW50IGBqb2luKERJU1RfQ0xJRU5UX1BBVEgsICcvaW5kZXgnKWBcbiAgICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgZXhjbHVkZWQgZnJvbSBvcHRpbWl6YXRpb25cbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ3ZpdGVwcmVzcycsXG4gICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgSW5zcGVjdCgpLFxuICAgICAgR2l0Q2hhbmdlbG9nKHtcbiAgICAgICAgcmVwb1VSTDogKCkgPT4gZ2l0aHViUmVwb0xpbmssXG4gICAgICB9KSxcbiAgICAgIEdpdENoYW5nZWxvZ01hcmtkb3duU2VjdGlvbih7XG4gICAgICAgIGdldENoYW5nZWxvZ1RpdGxlOiAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgICByZXR1cm4gJ0NoYW5nZSBMb2cnXG4gICAgICAgIH0sXG4gICAgICAgIGdldENvbnRyaWJ1dG9yc1RpdGxlOiAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgICByZXR1cm4gJ0NvbnRyaWJ1dG9ycydcbiAgICAgICAgfSxcbiAgICAgICAgZXhjbHVkZXM6IFtcbiAgICAgICAgICAndG9jLm1kJyxcbiAgICAgICAgICAnaW5kZXgubWQnLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBQYWdlUHJvcGVydGllcygpLFxuICAgICAgUGFnZVByb3BlcnRpZXNNYXJrZG93blNlY3Rpb24oe1xuICAgICAgICBleGNsdWRlczogW1xuICAgICAgICAgICd0b2MubWQnLFxuICAgICAgICAgICdpbmRleC5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIFRodW1ibmFpbEhhc2hJbWFnZXMoKSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICAgIGRpcnM6ICcudml0ZXByZXNzL3RoZW1lL2NvbXBvbmVudHMnLFxuICAgICAgICBkdHM6ICcudml0ZXByZXNzL2NvbXBvbmVudHMuZC50cycsXG4gICAgICB9KSxcbiAgICAgIFVub0NTUygpLFxuICAgIF0sXG4gICAgc3NyOiB7XG4gICAgICBub0V4dGVybmFsOiBbXG4gICAgICAgICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1lbmhhbmNlZC1yZWFkYWJpbGl0aWVzJyxcbiAgICAgICAgJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWhpZ2hsaWdodC10YXJnZXRlZC1oZWFkaW5nJyxcbiAgICAgICAgJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWlubGluZS1saW5rLXByZXZpZXcnLFxuICAgICAgXSxcbiAgICB9LFxuICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWRtaW4vRGVza3RvcC9tb2hhbW1lZC9teS1vYnNpZGlhbi1zaXRlLW5vbGViYXNlL21ldGFkYXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWRtaW4vRGVza3RvcC9tb2hhbW1lZC9teS1vYnNpZGlhbi1zaXRlLW5vbGViYXNlL21ldGFkYXRhL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL21vaGFtbWVkL215LW9ic2lkaWFuLXNpdGUtbm9sZWJhc2UvbWV0YWRhdGEvaW5kZXgudHNcIjsvKiogXHU2NTg3XHU2NzJDICovXG5leHBvcnQgY29uc3Qgc2l0ZU5hbWUgPSAnTlx1MDBGM2xcdTAwRUJiYXNlJ1xuZXhwb3J0IGNvbnN0IHNpdGVTaG9ydE5hbWUgPSAnTlx1MDBGM2xcdTAwRUJiYXNlJ1xuZXhwb3J0IGNvbnN0IHNpdGVEZXNjcmlwdGlvbiA9ICdcdThCQjBcdTVGNTVcdTU2REVcdTVGQzZcdUZGMENcdTc3RTVcdThCQzZcdTU0OENcdTc1NDVcdTYwRjNcdTc2ODRcdTU3MzBcdTY1QjknXG5cbi8qKiBcdTY1ODdcdTY4NjNcdTYyNDBcdTU3MjhcdTc2RUVcdTVGNTUgKi9cbmV4cG9ydCBjb25zdCBpbmNsdWRlID0gWydub3RlcycsICdcdTc1MUZcdTZEM0InXVxuXG4vKiogUmVwbyAqL1xuZXhwb3J0IGNvbnN0IGdpdGh1YlJlcG9MaW5rID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ub2xlYmFzZS9ub2xlYmFzZSdcbi8qKiBEaXNjb3JkICovXG5leHBvcnQgY29uc3QgZGlzY29yZExpbmsgPSAnaHR0cHM6Ly9kaXNjb3JkLmdnL1h1TkZEY0RaR2onXG5cbi8qKiBcdTY1RTBcdTUzNEZcdThCQUVcdTUyNERcdTdGMDBcdTU3REZcdTU0MEQgKi9cbmV4cG9ydCBjb25zdCBwbGFpblRhcmdldERvbWFpbiA9ICdub2xlYmFzZS5heWFrYS5pbydcbi8qKiBcdTVCOENcdTY1NzRcdTU3REZcdTU0MEQgKi9cbmV4cG9ydCBjb25zdCB0YXJnZXREb21haW4gPSBgaHR0cHM6Ly8ke3BsYWluVGFyZ2V0RG9tYWlufWBcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVYsU0FBUyxvQkFBb0I7QUFDcFgsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sYUFBYTtBQUVwQixTQUFTLGNBQWMsbUNBQW1DO0FBQzFELFNBQVMsZ0JBQWdCLHFDQUFxQztBQUM5RCxTQUFTLDJCQUEyQjs7O0FDRTdCLElBQU0saUJBQWlCO0FBS3ZCLElBQU0sb0JBQW9CO0FBRTFCLElBQU0sZUFBZSxXQUFXLGlCQUFpQjs7O0FETHhELElBQU8sc0JBQVEsYUFBYSxZQUFZO0FBQ3RDLFNBQU87QUFBQSxJQUNMLGVBQWUsQ0FBQyxVQUFVO0FBQUEsSUFDMUIsY0FBYztBQUFBO0FBQUE7QUFBQSxNQUdaLFNBQVM7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxRQUNYLFNBQVMsTUFBTTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxNQUNELDRCQUE0QjtBQUFBLFFBQzFCLG1CQUFtQixNQUFjO0FBQy9CLGlCQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0Esc0JBQXNCLE1BQWM7QUFDbEMsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxlQUFlO0FBQUEsTUFDZiw4QkFBOEI7QUFBQSxRQUM1QixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxvQkFBb0I7QUFBQSxNQUNwQixXQUFXO0FBQUEsUUFDVCxTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsUUFDM0IsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1AsQ0FBQztBQUFBLE1BQ0QsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
