export const FIRST_RUN = `
The Excalidraw Obsidian plugin is much more than "just" a drawing tool. To help you get started here's a showcase of the key Excalidraw plugin features.

If you'd like to learn more, please subscribe to my YouTube channel: [Visual PKM](https://www.youtube.com/channel/UCC0gns4a9fhVkGkngvSumAQ) where I regularly share videos about Obsidian-Excalidraw and about tools and techniques for Visual Personal Knowledge Management.

Thank you & Enjoy!

<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/o0exK-xFP3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>
`;

export const RELEASE_NOTES: { [k: string]: string } = {
  Intro: `After each update you'll be prompted with the release notes. You can disable this in plugin settings.

I develop this plugin as a hobby, spending my free time doing this. If you find it valuable, then please say THANK YOU or...

<div class="ex-coffee-div"><a href="https://ko-fi.com/zsolt"><img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height=45></a></div>
`,
"1.8.12": `
<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/OjNhjaH2KjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

# New
- Hand/Panning Tool, added by the Excalidraw.com team [#6141](https://github.com/excalidraw/excalidraw/pull/6141)
- Configure custom pens, and pin to the sidebar for easy access [#986](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/986)
- Added color picker. This allows you to pick colors not included in the palette, and to pick colors from any object displayed on screen.
- Option to pin favorite scripts (downloaded and user scripts) to the sidebar
- New Script in Script Library: [Mindmap format](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Mindmap%20format.md) by [pandoralink](https://github.com/zsviczian/obsidian-excalidraw-plugin/commits/master/ea-scripts/Mindmap%20format.md?author=pandoralink) 🙏🎉
`,
"1.8.11": `
<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/rBarRfcSxNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

# New
- Support for referencing images from the internet in Excalidraw drawings, including YouTube thumbnail support. [#913](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/913)
  - Link to images on the internet without creating a copy in your Vault by holding down the CTRL key while dropping the link or image.
  - Automatic conversion of image URLs and YouTube links into image elements with original links added as a link on the element when pasting. Note, that if you only want to paste the plain text link (not the image), first double-click the canvas to start a new text element, then paste the link.
- Two new options added to plugin settings:
  - Make mouse wheel zoom by default [#474](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/474)
  - Allow pinch zoom in pen mode [#828](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/828)
- Update to the [Set Grid](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Set%20Grid.svg) script now saves the grid setting for the current file.
`,
"1.8.10": `
<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/wTtaXmRJ7wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

# QoL improvements
- You can structure icons in the Obsidian tools panel by moving scripts to folders
![image|300](https://user-images.githubusercontent.com/14358394/212389592-306130d0-209a-49df-99bb-c538f2155b23.png)
- I added useful actions to the hamburger menu in both tray-mode and normal-mode. 
![image|150](https://user-images.githubusercontent.com/14358394/212534508-9107fd19-27ab-4415-8abc-bc97c73afc0b.png)
- I added a new Export Image dialog. You can access the new export screen from the hamburger-menu
![image|200](https://user-images.githubusercontent.com/14358394/212534654-7a479e23-8d5d-452e-9a18-a9896278aa27.png)
- Links in help now point to Obsidian-Excalidraw relevant content.
- I added a welcome screen
![image|150](https://user-images.githubusercontent.com/14358394/212534568-3cd1e8a1-5b20-4a30-96e4-40d7dac57e33.png)
- I updated the alternative dark mode / dynamic styling [script](https://gist.github.com/zsviczian/c7223c5b4af30d5c88a0cae05300305c)
`,
"1.8.9":`
# Minor QoL improvements
- When you open a second drawing in the same Excalidraw view (i.e. by navigating a link) and make a change to this drawing, and then press UNDO, the entire drawing disappeared. Redo brought the image back, however, this behavior was frustrating. Not anymore...
- On iPad
  - when you open the command palette, autozoom resized the drawing. If the Obsidian command palette or some other modal window is shown Excalidraw will not resize the view.
  - when you add a link to the drawing using the Command Palette, sometimes the link was added in a far corner of the drawing outside the current view area. This should be fixed now.`,
"1.8.8":`
<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/uZz5MgzWXiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

# New
- The plugin now includes support for [Perfect Freehand](https://perfect-freehand-example.vercel.app/) pen-options. I've also added a new [Alternative Pens](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Alternative%20Pens.md) script.
- Embed scene in exported PNG and SVG images [#860](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/860).  This means that the export will be a normal PNG or SVG image with the added functionality that if someone loads the image into excalidraw.com it will open as a normal excalidraw file.
  - I've added 2 new Command Palette actions (export PNG, export SVG with embedded scene).
  - If you SHIFT click ${String.fromCharCode(96)} Save as PNG (or SVG)${String.fromCharCode(96)} in the workspace-tab menu, Excalidraw will embed the scene in the export.
- I updated the [Organic Line](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Organic%20Line.md)  script. It has an improved thick-to-thin look and a new thin-to-thick-to-thin line type.

# Fixed
- Intelligent image width setting [#955](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/955). Before this change, when the embedded image was small, the image would be extended to meet the image width setting in plugin settings. From now on, if the image is smaller than max-width, it will only extend to max-width. You can still set 100% width using custom CSS. See more on that [here](https://github.com/zsviczian/obsidian-excalidraw-plugin#embedded-images).

# New in ExcalidrawAutomate
- I added the ${String.fromCharCode(96)} plaintext${String.fromCharCode(96)} parameter to ${String.fromCharCode(96)}ExcalidrawAutomate.create${String.fromCharCode(96)} . Using this, you can add some text below the frontmatter but above the ${String.fromCharCode(96)}# Text Elements${String.fromCharCode(96)} section. Use this for example to add metadata to your file. (e.g. I use this in my Daily Quote template to add a Dataview field for the ${String.fromCharCode(96)}Author::${String.fromCharCode(96)} and add the quote with a standard block reference, so I can easily reference it in other files. I also add the ${String.fromCharCode(96)}#quote${String.fromCharCode(96)} tag to the file using this.)
- The script running in the ScriptEngine now also receives the ${String.fromCharCode(96)}TFile${String.fromCharCode(96)} object for the script itself. You can access this object during execution via the ${String.fromCharCode(96)}utils.scriptFile${String.fromCharCode(96)} variable. 
`,
"1.8.7":`
## New from Excalidraw.com
- Support shrinking text containers to their original height when text is removed [#6025](https://github.com/excalidraw/excalidraw/pull/6025)
<div class="excalidraw-videoWrapper"><div>
<iframe src="https://user-images.githubusercontent.com/14358394/209404092-579d54e9-7003-48ef-8b82-84be08ba6246.mp4" title="Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

## Fixed
- removed the white background when editing arrow-label [#6033](https://github.com/excalidraw/excalidraw/pull/6033)
- Minor style tweaks
  - for embedding Excalidraw into Obsidian Canvas. e.g. dragging no longer accidentally creates an image copy of the drawing, and
  - style tweaks on the Excalidraw canvas

## New
- If you set a different text color and sticky note border color, now if you change the border color, the text color will not be changed.
`,
"1.8.6":`
## New from Excalidraw.com:
- Better default radius for rectangles [#5553](https://github.com/excalidraw/excalidraw/pull/5553). Existing drawings will look unchanged, this applies only to new rectangles.
![image|200](https://user-images.githubusercontent.com/5153846/206264345-59fd7436-e87b-4bc9-ade8-9e6f6a6fd8c1.png)
> [!attention]- ExcalidrawAutomate technical details
> - ${String.fromCharCode(96)}strokeSharpness${String.fromCharCode(96)} is now deprecated
> - use roundness instead
>    - ${String.fromCharCode(96)}roundness === null${String.fromCharCode(96)} is legacy ${String.fromCharCode(96)}strokeSharpness = "sharp"${String.fromCharCode(96)}
>    - ${String.fromCharCode(96)}roundness = { type: RoundnessType; value?: number }${String.fromCharCode(96)}
>      - type: 1, LEGACY, type:2 PROPORTIONAL_RADIUS, type:3 ADAPTIVE_RADIUS: 3
>      - value:
>        - Radius represented as % of element's largest side (width/height).
>          DEFAULT_PROPORTIONAL_RADIUS = 0.25;
>        - Fixed radius for the ADAPTIVE_RADIUS algorithm. In pixels.
>          DEFAULT_ADAPTIVE_RADIUS = 32;

## New
- For Obsidian 1.1.6 and above
  - Improved embedding into Obsidian Canvas
  - Improved embedding into Markdown documents
- Added setting under ${String.fromCharCode(96)}Display/Default mode when opening Excalidraw${String.fromCharCode(96)} to always open the drawing in view mode on Mobile, but in normal mode on desktop. [#939](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/939)

## Fixed
- Zoom reset tooltip appears twice [#942](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/942)
- Hid export library from library menu as it does not work due to Obsidian limitations. Use the command palette export library instead.
- Arrow with label did not get exported and embedded correctly [#941](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/941)
![image|200](https://user-images.githubusercontent.com/22638687/207845868-b352ddb1-7994-4f13-a0b2-f2e19bd72935.png)
`,
"1.8.4":`
## New from Excalidraw.com
- Labels on Arrows!!! [#5723](https://github.com/excalidraw/excalidraw/pull/5723)
  - To add a label press "Enter" or "Double click" on the arrow
  - Use "Cmd/Ctrl+double click" to enter the line editor

<div class="excalidraw-videoWrapper"><div>
<iframe src="https://user-images.githubusercontent.com/11256141/192515552-6b6ddc06-5de0-4931-abdd-6ac3a804656d.mp4" title="Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

## New
- **Changed behavior**: In the Obsidian markdown editor clicking an Excalidraw image will not open the image (to avoid accidentally opening the image on a tablet). To open a drawing for editing in Excalidraw double click or long-tap on it. [#920](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/920)

## Fixed 
- Text stroke color is not honored when pasting a HEX color string to an Excalidraw canvas open in an Obsidian popout window [#921](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/921)
- The new [multi-line >> multi-element paste behavior](https://github.com/excalidraw/excalidraw/pull/5786) introduced in the previous release did not work as expected in Obsidian. Now it does.
`,
"1.8.2":`
Introducing the [Excalidraw Slideshow Script](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Slideshow.md) - available in the script store
<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/HhRHFhWkmCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

## Fixed
- Obsidian tools panel gets misplaced after switching Obsidian workspace tabs

## New in ExcalidrawAutomate
- changed ${String.fromCharCode(96)}viewToggleFullScreen(forceViewMode: boolean = false): void${String.fromCharCode(96)}: the function will toggle view mode on when going to full screen and view mode off when terminating full screen.
- new functions
${String.fromCharCode(96, 96, 96)}typescript
setViewModeEnabled(enabled: boolean):void;
viewUpdateScene(
    scene: {
      elements?: ExcalidrawElement[];
      appState?: AppState;
      files?: BinaryFileData;
      commitToHistory?: boolean;
    },
    restore: boolean = false,
  ):void;
viewZoomToElements(
    selectElements: boolean,
    elements: ExcalidrawElement[]
  ):void;
${String.fromCharCode(96, 96, 96)}

`,
"1.8.1": `
## New and fixes from Excalidraw.com
- New text paste behavior. Pasting multiline text will generate separate text elements unless you hold down the shift button while pasting [#5786](https://github.com/excalidraw/excalidraw/pull/5786)
- line editor fixes [#5927](https://github.com/excalidraw/excalidraw/pull/5927)

## Fixed
- The Command Palette "Insert link" action now inserts the new link at the top drawing layer, not at the bottom.
- Updated, hopefully, better organized, Plugin Readme.

## New
- Second attempt at moving to React 18. This upgrade is required to maintain alignment with the core Excalidraw product and to continue to benefit from Excalidraw.com enhancements.
- Added options to Plugin Settings
  - to disable autozoom when loading a drawing for the first time [#907](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/907)
  - to modify autosave interval. You can now set an autosave interval for desktop and for mobile [#888](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/888)

## New in ExcalidrawAutomate
- Published the obsidian_module on the ExcalidrawAutomate object. ${String.fromCharCode(96)}ExcalidrawAutomate.obsidian${String.fromCharCode(96)}. Publishing this object will give script developers increased flexibility and control over script automation.
`,
"1.8.0": `
<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/7gu4ETx7zro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

## New
- Optical Character Recognition (OCR). Introducing the MVP (minimum viable product) release of the integration of [Taskbone](https://taskbone.com) OCR into Excalidraw. See the new scan button on the Obsidian tools panel.
- New and improved full-screen mode
  - Activate using the Obsidian tools panel, the Obsidian Command Palette, or the Alt+F11 shortcut
  - The ESC key no longer closes full-screen
  - Full-screen mode works properly on iOS as well
- Improved Icon visibility on the Obsidian tools panel
- Added 3 additional buttons to the tools panel
  - Force save
  - Open link (useful on Mobile devices). In the case of LaTeX equations, the button opens the equation properties.
  - Open the link in a new pane. In the case of embedded markdown documents, the button opens the embed properties.

## Fixed
- The [deconstruct selected elements into a new drawing](https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/ea-scripts/Deconstruct%20selected%20elements%20into%20new%20drawing.md) script now also correctly decomposes transcluded text elements.
`,
"1.7.30":`
Fix:
- Forcing the embedded image to always scale to 100% (a feature introduced in [1.7.26](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.7.26)) scaled the embedded excalidraw drawings incorrectly on devices with a pixel ratio of 2 or 3 (e.g. iPads). This is now fixed, however, this fix might retrospectively impact drawings that use this feature. Sorry for that.
`,
"1.7.29":`
- This is a big update that accommodates the **UI redesign** on Excalidraw.com [#5780](https://github.com/excalidraw/excalidraw/pull/5780). The change on the surface may seem superficial, however, I had to tweak a number of things to make it work in Obsidian. I hope I found everything that broke and fixed it, if not, I'll try to fix it quickly...
- This update also comes with changes under the hood that **fix issues with Excalidraw Automate** - paving the way for further scripts, plus some smaller bug fixes.
- I **reworked text wrapping**. In some cases, text wrapping in SVG exports looked different compared to how the text looked in Excalidraw. This should now be fixed.
- If you are using the **Experimental Dynamic Styling** of the Excalidraw Toolbar, then I recommend updating your styling script following base on [this](https://gist.github.com/zsviczian/c7223c5b4af30d5c88a0cae05300305c)
`,
"1.7.27":`## New
- Import SVG drawing as an Excalidraw object. [#679](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/679)

<div class="excalidraw-videoWrapper"><div>
<iframe src="https://www.youtube.com/embed/vlC1-iBvIfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>

## Fixed
- Large drawings freeze on the iPad when opening the file. I implemented a workaround whereby Excalidraw will avoid zoom-to-fit drawings with over 1000 elements. [#863](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/863)
- Reintroduced copy/paste to the context menu
`,
"1.7.26":`## Fixed
- Transcluded block with a parent bullet does not embed sub-bullet [#853](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/853)
- Transcluded text will now exclude ^block-references at end of lines
- Phantom duplicates of the drawing appear when "zoom to fit" results in a zoom value below 10% and there are many objects on the canvas [#850](https://github.com/zsviczian/obsidian-excalidraw-plugin/issues/850)
- CTRL+Wheel will increase/decrease zoom in steps of 5% matching the behavior of the "+" & "-" zoom buttons.
- Latest updates from Excalidarw.com
  - Freedraw flip not scaling correctly [#5752](https://github.com/excalidraw/excalidraw/pull/5752)
  - Multiple elements resizing regressions [#5586](https://github.com/excalidraw/excalidraw/pull/5586)

## New - power user features
- Force the embedded image to always scale to 100%. Note: this is a very niche feature with a very particular behavior that I built primarily for myself (even more so than other features in Excalidraw Obsidian - also built primarily for myself 😉)... This will reset your embedded image to 100% size every time you open the Excalidraw drawing, or in case you have embedded an Excalidraw drawing on your canvas inserted using this function, every time you update the embedded drawing, it will be scaled back to 100% size. This means that even if you resize the image on the drawing, it will reset to 100% the next time you open the file or you modify the original embedded object. This feature is useful when you decompose a drawing into separate Excalidraw files, but when combined onto a single canvas you want the individual pieces to maintain their actual sizes. I use this feature to construct Book-on-a-Page summaries from atomic drawings.
- I added an action to the command palette to temporarily disable/enable Excalidraw autosave. When autosave is disabled, Excalidraw will still save your drawing when changing to another Obsidian window, but it will not save every 10 seconds. On a mobile device (but also on a desktop) this can lead to data loss if you terminate Obsidian abruptly (i.e. swipe the application away, or close Obsidian without first closing the drawing). Use this feature if you find Excalidraw laggy.`,
};
