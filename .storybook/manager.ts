import { addons } from 'storybook/manager-api';

addons.setConfig({
    // 强制默认展开下方面板（如 Controls、Actions 等）
    panelPosition: 'bottom',
    // 可选：设置默认选中的面板（例如 Controls 面板，id 为 'storybook/controls/panel'）
    selectedPanel: 'storybook/controls/panel',
    // 确保面板默认显示
    showPanel: true,
});