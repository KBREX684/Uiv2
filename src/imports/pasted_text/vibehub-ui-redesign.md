
---

# VibeHub 前端重构完整提示词（可直接用于 Figma）

请为产品 **VibeHub** 设计一套完整的 Web UI 重构方案，输出适合开发落地的高保真界面与设计系统。

## 一、项目背景

VibeHub 是一个面向开发者、AI Builder、开源创作者和协作团队的社区平台。
它当前是一个基于 **Next.js App Router** 的全栈 Web 产品，前端页面与 `/api/v1/*` 接口运行在同一个 Web 服务内，默认本地访问可按 `http://localhost:3000` 理解；接口与前端同域同端口；数据库为 PostgreSQL，Redis 可选，MCP 另有 stdio 模式和 HTTP 接口能力   。

产品核心能力包括：

* 社区讨论
* 项目展示与发现
* 团队组建与协作
* 创作者主页
* 排行榜
* 专题集合
* 企业工作台
* API Keys / OpenAPI / MCP
* 管理后台

当前产品中已经存在首页、Discover、Discussions、Teams、Leaderboards、Projects Detail、Discussions Detail、Creators Detail、Enterprise Workspace、Admin 等页面与能力模块  。

---

## 二、设计目标

请对 VibeHub 进行一次完整 UI 重构，目标如下：

1. 建立统一的设计系统
2. 将原有页面视觉风格统一为 **高端、克制、护眼的开发者社区风格**
3. 在保持专业与未来感的前提下，整体升级产品质感
4. 支持 **中英文切换**
5. 为前端开发提供清晰可落地的页面与组件设计
6. 输出适合桌面端、平板端、移动端的响应式方案

---

## 三、视觉方向要求

### 总体风格

请采用：

* **Dark 高级版设计**
* 偏开发者社区 / AI 工具平台 / 高端 SaaS
* 护眼，不要纯黑
* 现代、理性、未来感
* 轻玻璃拟态 + 精致卡片 + 数据仪表板质感
* 比传统暗黑后台更柔和、层次更清晰

### 禁止方向

不要做成：

* 纯黑赛博朋克
* 高饱和霓虹蓝紫黑
* 过度炫技的 3D
* 过于娱乐化或游戏化
* 过暖、过奶油、偏 lifestyle 的浅色美学

### 视觉关键词

请围绕这些关键词设计：

* developer-first
* premium
* calm dark
* productive
* intelligent
* collaborative
* modular
* elegant
* eye-friendly
* AI-native

---

## 四、配色重构要求

### 原需求变更

原本页面偏浅暖色、奶油白、暖米色、浅玻璃风格。
现在请将整体改为 **深色高端设计体系**，但不要过于黑暗，强调护眼和长期使用舒适度。

### 配色原则

请建立一套适合开发者社区的 Dark 主题色板：

#### 1. 背景层级

请使用多层深色背景，而不是单一纯黑：

* 主背景：深蓝灰 / 炭灰 / 石墨灰
* 次背景：略亮一级的卡片背景
* 悬浮层：再亮一层，用于 modal、dropdown、hover card
* 分割边框：低对比、精致、带透明度

#### 2. 建议基础色气质

整体建议偏向：

* Slate / Graphite / Midnight Blue / Charcoal
* 带少量青蓝、冷灰、科技灰
* 远离偏暖黄褐主色调

#### 3. 强调色

强调色请控制在 1~2 个主 accent 内，推荐：

* 冷青蓝
* 冰川蓝
* 柔和青绿
* 低饱和电蓝

避免高饱和荧光色。

#### 4. 状态色

需定义：

* success
* warning
* error
* info
* featured
* premium / enterprise

这些状态色要在 dark 背景中依然清晰，但不刺眼。

### 请输出完整色板，包括：

* Background
* Surface
* Elevated Surface
* Border
* Text Primary
* Text Secondary
* Text Tertiary
* Primary Accent
* Secondary Accent
* Success / Warning / Error / Info
* Tag colors
* Chart / metric colors

---

## 五、中英文切换要求（必须纳入设计）

VibeHub 前端需要支持 **中英文双语切换**。请在所有核心页面中将 i18n 作为正式设计需求，而不是事后补丁。

### 需要体现的语言切换设计点：

1. 顶部导航中加入语言切换入口

   * EN / 中文
   * 可以是 segmented control、dropdown 或简洁切换器
   * 视觉要融入导航，不突兀

2. 所有页面文案需考虑中英文长度差异

   * 英文更短
   * 中文更紧凑但信息密度高
   * 不要让按钮、tab、卡片标题在切换语言后破版

3. 组件需要支持双语状态

   * Button
   * Tabs
   * Nav
   * Table headers
   * Form labels
   * Empty states
   * Toast / modal

4. 页面中若有 code / API / MCP / developer 文案，保留专业英文术语可接受，但整体要支持完整中文与完整英文版本

5. 请在 Figma 中体现：

   * 默认英文版
   * 至少一套中文切换后的关键页示例
   * 明确哪些区域需要 auto layout 以适配双语长度变化

---

## 六、信息架构与页面范围

请按以下结构输出页面设计。

---

# A. 公共页面（Public）

## 1. 首页 `/`

页面定位：品牌门户 + 社区入口 + 产品总览

必须包含：

* 顶部导航
* 品牌 Hero
* 搜索入口
* 平台数据概览卡片
* Community Feed
* Featured Today
* Project Gallery
* Footer

当前首页已有 Overview / 搜索 / 社区 Feed / 精选项目 / 项目画廊等模块 。

请重构为：

* 深色高端 landing page
* 强调开发者社区氛围
* 兼顾内容发现与品牌表达

---

## 2. 项目发现页 `/discover`

页面定位：项目搜索与筛选页

必须包含：

* 页面头部
* Search 输入框
* Filter 面板
* Tag 筛选
* Tech Stack 筛选
* Stage / Status 筛选
* Team 筛选
* 结果统计
* 项目卡片网格
* 空状态
* 分页

当前筛选参数包括 `query / tag / tech / team / status / page / limit`，并且结果页是标准项目网格浏览页 。

请将其设计为：

* 深色下仍然信息清晰
* 筛选体验高级、整洁
* 可支持中英文文案切换

---

## 3. 讨论列表页 `/discussions`

页面定位：社区内容流

必须包含：

* 页面头部
* 排序切换：Recent / Hot / Featured
* 帖子卡片流
* 空状态

当前已有 Recent / Hot / Featured 排序逻辑 。

请设计为：

* 更适合开发者社区浏览的深色内容流
* 阅读舒适、层级清晰
* 不要像普通论坛那样老旧

---

## 4. 团队列表页 `/teams`

页面定位：协作团队发现页

必须包含：

* 页面说明
* 创建团队入口
* 团队卡片列表
* 团队摘要信息
* 空状态

当前 Teams 页功能齐全，但视觉仍偏 MVP，适合作为重点重构对象 。

请重构为：

* 更具专业团队协作平台气质
* 兼顾招募感与组织感

---

## 5. 排行榜页 `/leaderboards`

页面定位：趋势与影响力展示页

必须包含：

* 周榜 Hero
* 周切换器
* Weekly Discussions
* Weekly Projects
* Contribution Hall of Fame
* All-time Discussions
* All-time Projects

当前该页已有完整数据展示结构 。

请设计为：

* 高级数据仪表板式视觉
* 信息密度高但不压迫
* 深色下具有节奏感和仪式感

---

## 6. 专题集合页 `/collections`

页面定位：内容策展 / 专题导航页

必须包含：

* 专题页 Hero
* 专题卡片网格
* Tag / Description / CTA

当前页面适合保留内容策展气质 。

---

# B. 详情页模板（Detail Pages）

## 7. 项目详情页 `/projects/[slug]`

这是核心页面之一，必须重点设计。

必须包含：

* 项目 Hero
* Logo / 主视觉
* 项目状态标签
* Demo / Repo / Website 按钮
* 项目描述区
* Tech Stack 标签
* Collaboration Intent 提交区
* Approved Collaborators 区
* 里程碑侧栏
* 项目绑定团队模块
* MCP / Agent Invocation 模块
* Screenshot Gallery

当前项目详情页已具备以上完整结构 。

请将其设计为：

* 高端开发者项目展示页
* 暗色下突出产品截图和技术栈
* 保持功能模块清晰分区

---

## 8. 讨论详情页 `/discussions/[slug]`

必须包含：

* 返回入口
* 标题区
* Featured 标识
* 标签列表
* 作者信息
* 发布时间
* 正文内容区
* 评论区
* 评论计数
* 评论线程样式

当前已有完整内容阅读结构 。

请设计为：

* 深色阅读体验友好
* 长文阅读不疲劳
* 评论层级清晰

---

## 9. 团队详情页 `/teams/[slug]`

必须包含：

* 团队头部
* mission / 简介
* 外部社群按钮（Discord / Telegram / Slack）
* GitHub 组织 / 仓库信息
* 成员列表
* 团队项目
* 任务看板
* 里程碑面板
* 团队操作区

当前团队详情已有这些结构，且还包含 GitHub 数据、任务、milestone 等功能 。

请设计为：

* 开发者团队协作空间
* 更偏 productized workspace
* 保持专业、可信、组织化

---

## 10. 创作者详情页 `/creators/[slug]`

必须包含：

* 创作者 Hero
* Headline / Bio
* 技能标签
* 协作偏好
* 成长统计卡片
* 项目作品集

当前页面已有完整数据结构 。

请设计为：

* 开发者个人品牌主页
* 专业而不冷漠
* 突出 skill 与 project portfolio

---

# C. 登录后用户区（Authenticated）

## 11. 通知中心 `/notifications`

必须包含：

* 未登录引导态
* 通知列表
* 未读状态
* 标题 / 正文 / 时间
* 跳转入口
* 空状态

当前通知页已存在未登录与已登录两种状态 。

请设计为：

* 更像现代 SaaS 通知中心
* 深色下信息一目了然

---

## 12. 开发者设置 `/settings/api-keys`

必须包含：

* 页面头部
* API Key 列表
* 创建 Key
* Scope 选择
* 复制 / 一次性展示态
* 删除 / 吊销
* API 说明区
* OpenAPI / MCP 入口

当前该页对应开放 API 和 API Key 能力  。

请设计为：

* 极简专业的 developer settings 页面
* 类似现代云平台 / AI 平台设置中心

---

## 13. 企业工作台 `/workspace/enterprise`

必须包含：

* Workspace Hero
* Collaboration Funnel
* Pending Join Requests
* My Teams
* Project Radar
* Talent Radar
* API Keys 入口
* MCP v2 入口

当前企业工作台已具备这些模块 。

请设计为：

* 高端 dark dashboard
* 有企业 intelligence panel 的质感
* 深色但不压抑
* 强调“协作 + 数据 + 人才雷达”

---

# D. 管理后台（Admin）

## 14. Admin Dashboard `/admin`

必须包含：

* Admin Access Required 状态
* Dashboard Hero
* 指标总览卡片
* 用户管理入口
* 帖子审核入口
* 举报管理入口
* 协作意向审核入口
* Audit Logs
* MCP 调用审计
* 漏斗指标
* 运营工具区

当前后台结构明确存在 。

请设计为：

* 更成熟的管理后台
* 与公共页面风格统一，但偏内部系统
* 深色下控制对比度，避免疲劳

---

## 七、需要补齐的附加页面与弹窗

请额外补充以下设计：

### 创建 / 编辑类页面

* 新建项目页
* 编辑项目页
* 新建讨论页
* 编辑讨论页
* 新建团队页
* 编辑团队资料页

### 弹窗 / Flow

* 入队申请弹窗
* 队长审批弹窗
* 创建任务弹窗
* 编辑任务弹窗
* 创建 Milestone 弹窗
* 编辑 Milestone 弹窗
* 绑定团队弹窗
* 删除确认弹窗

### 系统状态页

* Login 引导页
* 404 页面
* No permission 页面
* Empty state 页面
* Search no result 页面
* Loading skeleton 页面

---

## 八、导航与语言切换设计要求

当前顶栏导航已包括：

* Overview
* Discover
* Discussions
* Teams
* Leaderboards
* API Keys
* Admin
* Login 

请重构顶部导航，并加入：

* 语言切换器（EN / 中文）
* 登录态 / 未登录态 / 管理员态差异
* 响应式移动菜单
* Dark 主题下的导航层次
* Hover / Active / Focus 状态

请确保语言切换器足够简洁，适合高端产品，不要像传统官网那样笨重。

---

## 九、设计系统组件清单

请在 Figma 中单独建立 Design System，至少包括以下组件：

### 基础组件

* Button
* Input
* Search Input
* Textarea
* Select
* Checkbox
* Radio
* Toggle
* Tabs
* Pagination
* Badge / Tag
* Avatar
* Tooltip
* Dropdown
* Modal / Drawer
* Toast / Alert
* Segmented Control
* Language Switcher

### 内容组件

* Project Card
* Featured Project Card
* Post Card
* Team Card
* Creator Card
* Ranking Row
* Notification Item
* Comment Item
* Comment Thread
* Stat Card
* Filter Panel
* Empty State Block
* Hero Section
* Section Header

### 复杂业务组件

* Collaboration Intent Form
* Team Task Column
* Team Task Card
* Milestone Block
* API Key Row
* Scope Selector
* Funnel Metric Card
* Radar Card
* Admin Queue Card
* Audit Log Row

### 所有组件要求

* 使用 Auto Layout
* 具备 Variants
* 支持双语长度变化
* 支持 Dark theme
* 明确 hover / active / disabled / loading 状态

---

## 十、响应式设计要求

请输出三套画板：

### Desktop

* 1440px
* 12-column grid

### Tablet

* 1024px
* 8-column grid

### Mobile

* 390px
* 4-column grid

至少以下页面必须出三端适配：

* 首页
* Discover
* 项目详情
* 团队详情
* Enterprise Workspace
* 顶部导航含语言切换器

---

## 十一、排版与可读性要求

由于是深色主题，请特别注意：

1. 正文阅读舒适度
2. 标题与说明文字对比层级
3. 长列表和高密度 dashboard 的扫描效率
4. 表单可读性
5. 中文与英文在同一视觉系统下的统一性

建议：

* 标题有明显层级
* 正文不要用纯白
* 次级文字使用柔和灰蓝
* 边框使用低对比而非重描边
* 阴影克制
* 卡片层次靠 surface 差异与微弱高光来区分

---

## 十二、输出要求

请在 Figma 中按以下结构组织：

### 00_Foundation

* Color tokens
* Typography
* Spacing
* Radius
* Elevation
* Motion guidance
* Dark theme tokens
* i18n text behavior notes

### 01_Components

* 所有基础组件
* 所有业务组件
* 组件变体
* Hover / Active / Disabled / Loading
* 中英文适配示例

### 02_Public Pages

* 首页
* Discover
* Discussions
* Teams
* Leaderboards
* Collections

### 03_Detail Pages

* 项目详情
* 讨论详情
* 团队详情
* 创作者详情

### 04_User Workspace

* Notifications
* API Keys
* Enterprise Workspace

### 05_Admin

* Admin Dashboard
* 审核 / 列表 / 状态卡模板

### 06_Mobile

* 关键页面移动端适配

---

## 十三、设计交付标准

每个关键页面至少提供：

* Default
* Hover / Active
* Empty State
* Loading State
* Error / Permission State
* 中文版示例
* 英文版示例

---

## 十四、最终设计气质总结

请将 VibeHub 设计为一个：

**面向开发者社区、AI Builder、开源项目协作与企业洞察场景的高端暗色产品。**

要求它同时具备：

* 开发者喜欢的专业感
* AI 产品的未来感
* 企业 SaaS 的秩序感
* 社区产品的活跃感
* 长时间浏览的护眼体验
* 中英文切换下的完整一致性

请整体参考方向：

* Linear 的克制与层级
* Vercel / GitHub / modern dev tools 的专业感
* 高端暗色 SaaS 的 calm premium 质感
* 但避免过黑、过冷、过赛博

---


