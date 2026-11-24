<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { mapStages } from '../data/engineeringMapPages'

interface StageGrowthMeta {
  role: string
  change: string
  danger?: string
}

const growthMeta: StageGrowthMeta[] = [
  {
    role: '定方向、选场址、算匡算',
    change: '荒地尚未动土，建设单位先用红线桩圈出拟选场址边界，并在地形图上标定规划控制坐标。',
  },
  {
    role: '查地质、比方案、定可行性',
    change: '地质勘察钻机进场打孔取样，摸清地下土层与水位分布，为投资估算和可研批复提供依据。',
  },
  {
    role: '画蓝图、定标高、过图审',
    change: '设计院在场地轴网上落定建筑轮廓、层高与 ±0.00 标高，完成初步设计与施工图审查。',
  },
  {
    role: '定队伍、签合同、明责任',
    change: '通过招标确定施工与监理单位，签发中标通知书并签订施工、监理合同，明确工期与造价边界。',
  },
  {
    role: '围挡封闭、临设隔离、测量复核',
    change: '按 GB 55034 隔离办公生活区与作业区，完成勘察说明、设计交底、首次工地会、特种人员核验与开工令签发。',
  },
  {
    role: '五方验槽、危大管控、旁站验收',
    change: '基坑五方验槽、外架连墙件、混凝土浇筑旁站、防水蓄水试验、动火与有限空间持证监护同步闭环。',
    danger: '危大红线：37号令 + 建办质〔2024〕63号严重缺陷清单 + 建质规〔2024〕5号重大隐患',
  },
  {
    role: '四方报告、永久标牌、联合验收',
    change: '拆架撤吊后核定四方质量报告与永久性责任标牌，完成竣工验收、消防验收/备案与 15 日内竣工备案。',
  },
  {
    role: '使用说明书、城建档案、竣工结算',
    change: '按 GB 55032 第 5.0.1 条同步交付《工程使用说明书》，档案立卷移交城建档案馆，完成竣工结算审核。',
  },
  {
    role: '亮灯投用、保修维保、到期鉴定',
    change: '按使用说明书运维，履行法定最低保修期（防水 5 年/采暖供冷 2 期），设计使用年限到期后依法鉴定分级处置。',
  },
]

const stageIdx = ref(0)
const currentStage = computed(() => mapStages[stageIdx.value])
const currentMeta = computed(() => growthMeta[stageIdx.value])

const prevStage = () => {
  stageIdx.value = (stageIdx.value + mapStages.length - 1) % mapStages.length
}
const nextStage = () => {
  stageIdx.value = (stageIdx.value + 1) % mapStages.length
}
</script>

<template>
  <div class="esg" aria-label="工地随阶段生长 2.5D 互动沙盘">
    <div class="esg__top">
      <div class="esg__title-row">
        <span class="esg__badge">2.5D 工地生长沙盘</span>
        <strong>点选阶段 01～09，看同一块地如何从空地长成投用建筑</strong>
      </div>
      <div class="esg__step-btns">
        <button type="button" class="esg__nav-btn" @click="prevStage">◀ 上一阶段</button>
        <button type="button" class="esg__nav-btn" @click="nextStage">下一阶段 ▶</button>
      </div>
    </div>

    <div class="esg__pills" role="tablist" aria-label="建设阶段切换">
      <button
        v-for="(s, idx) in mapStages"
        :key="s.id"
        type="button"
        role="tab"
        :aria-selected="stageIdx === idx"
        class="esg__pill"
        :class="{ 'is-active': stageIdx === idx, 'is-passed': idx < stageIdx, 'is-danger-pill': idx === 5 && stageIdx === 5 }"
        @click="stageIdx = idx"
      >
        <i>{{ s.no }}</i><span>{{ s.name }}</span>
      </button>
    </div>

    <div class="esg__canvas-wrap">
      <svg viewBox="0 0 960 320" width="100%" role="img" :aria-label="`阶段 ${currentStage.no} ${currentStage.name} 工地生长图`" class="esg__svg">
        <defs>
          <pattern id="esg-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="rgba(16,42,67,0.07)" stroke-width="1" />
          </pattern>
          <pattern id="esg-soil" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 16L16 0M-4 4L4 -4M12 20L20 12" stroke="rgba(138,106,47,0.22)" stroke-width="1.2" />
          </pattern>
        </defs>

        <!-- 背景图纸网格 -->
        <rect x="0" y="0" width="960" height="320" fill="url(#esg-grid)" rx="8" />

        <!-- 01 策划立项：自然地形与地下剖面基底（常驻） -->
        <g class="esg__layer">
          <!-- 地表草坡与土层剖面 -->
          <polygon points="80,236 880,236 910,260 50,260" fill="#E6DFC8" stroke="#1B1F24" stroke-width="1.5" />
          <rect x="50" y="260" width="860" height="44" fill="url(#esg-soil)" stroke="#1B1F24" stroke-width="1.5" />
          <!-- 红线边界桩与坐标十字 -->
          <g :opacity="stageIdx === 0 ? 1 : 0.45">
            <line x1="150" y1="236" x2="150" y2="210" stroke="#1D4ED8" stroke-width="2" />
            <polygon points="150,210 176,216 150,222" fill="#FACC15" stroke="#1B1F24" stroke-width="1.2" />
            <line x1="810" y1="236" x2="810" y2="210" stroke="#1D4ED8" stroke-width="2" />
            <polygon points="810,210 784,216 810,222" fill="#FACC15" stroke="#1B1F24" stroke-width="1.2" />
            <line x1="150" y1="248" x2="810" y2="248" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="6 4" />
            <circle cx="480" cy="248" r="7" fill="none" stroke="#1D4ED8" stroke-width="1.5" />
            <line x1="468" y1="248" x2="492" y2="248" stroke="#1D4ED8" stroke-width="1.4" />
            <line x1="480" y1="238" x2="480" y2="258" stroke="#1D4ED8" stroke-width="1.4" />
            <text x="480" y="206" text-anchor="middle" font-size="12" fill="#102A43" font-weight="600">拟选场址红线范围与规划坐标</text>
          </g>
        </g>

        <!-- 02 可研决策：地质钻探机与水文地质分层（>=1） -->
        <g v-if="stageIdx >= 1" class="esg__layer">
          <!-- 分层地质线 -->
          <line x1="50" y1="276" x2="910" y2="276" stroke="#0E7490" stroke-width="1.2" stroke-dasharray="5 3" />
          <line x1="50" y1="291" x2="910" y2="291" stroke="#5B6572" stroke-width="1.2" />
          <text x="66" y="272" font-size="10.5" fill="#5B6572">粉质黏土层</text>
          <text x="66" y="288" font-size="10.5" fill="#0E7490">地下水位 / 卵石层</text>
          <text x="66" y="302" font-size="10.5" fill="#1B1F24">中风化基岩</text>
          <!-- 勘察钻孔 -->
          <rect x="278" y="236" width="6" height="62" fill="#0E7490" />
          <rect x="652" y="236" width="6" height="62" fill="#0E7490" />
          <!-- 阶段02高光钻机 -->
          <g v-if="stageIdx <= 3">
            <polygon points="266,236 281,182 296,236" fill="none" stroke="#1B1F24" stroke-width="1.8" />
            <rect x="273" y="220" width="16" height="16" fill="#FACC15" stroke="#1B1F24" stroke-width="1.2" />
            <text x="281" y="174" text-anchor="middle" font-size="11.5" fill="#0E7490" font-weight="600">地质勘察钻机</text>
          </g>
        </g>

        <!-- 03 勘察设计：虚线蓝图轮廓与标高尺寸线（stageIdx >= 2 && stageIdx <= 5） -->
        <g v-if="stageIdx >= 2 && stageIdx <= 5" class="esg__layer">
          <rect x="330" y="76" width="280" height="160" fill="rgba(29,78,216,0.06)" stroke="#1D4ED8" stroke-width="1.6" stroke-dasharray="7 4" />
          <line x1="330" y1="116" x2="610" y2="116" stroke="#1D4ED8" stroke-width="1" stroke-dasharray="4 4" />
          <line x1="330" y1="156" x2="610" y2="156" stroke="#1D4ED8" stroke-width="1" stroke-dasharray="4 4" />
          <line x1="330" y1="196" x2="610" y2="196" stroke="#1D4ED8" stroke-width="1" stroke-dasharray="4 4" />
          <line x1="312" y1="76" x2="312" y2="236" stroke="#0E7490" stroke-width="1.2" />
          <text x="306" y="156" text-anchor="end" font-size="11" fill="#0E7490">±0.00 / 28.5m</text>
          <text x="470" y="66" text-anchor="middle" font-size="12" fill="#1D4ED8" font-weight="600">施工图轴网蓝图轮廓</text>
        </g>

        <!-- 04 招标与合同：合同定标印章与界碑（>=3） -->
        <g v-if="stageIdx >= 3" class="esg__layer">
          <rect x="706" y="198" width="76" height="38" rx="4" fill="#FFFFFF" stroke="#1B1F24" stroke-width="1.5" />
          <line x1="714" y1="210" x2="770" y2="210" stroke="#1D4ED8" stroke-width="2" />
          <line x1="714" y1="219" x2="758" y2="219" stroke="#5B6572" stroke-width="1.4" />
          <circle cx="766" cy="224" r="7" fill="#D97706" />
          <text x="744" y="192" text-anchor="middle" font-size="11" fill="#102A43" font-weight="600">施工/监理合同</text>
        </g>

        <!-- 05 施工准备：围挡、门禁、保安室、彩钢板房（stageIdx >= 4 && stageIdx <= 5） -->
        <g v-if="stageIdx >= 4 && stageIdx <= 5" class="esg__layer">
          <!-- 封闭围挡 -->
          <rect x="130" y="218" width="170" height="18" fill="#102A43" stroke="#1B1F24" stroke-width="1.2" />
          <rect x="640" y="218" width="190" height="18" fill="#102A43" stroke="#1B1F24" stroke-width="1.2" />
          <!-- 办公生活区彩钢板房 -->
          <rect x="142" y="182" width="84" height="36" fill="#FFFFFF" stroke="#1B1F24" stroke-width="1.5" />
          <rect x="142" y="176" width="84" height="8" fill="#1D4ED8" stroke="#1B1F24" stroke-width="1.2" />
          <rect x="154" y="192" width="18" height="14" fill="#BAE6FD" stroke="#1B1F24" stroke-width="1" />
          <rect x="184" y="192" width="18" height="14" fill="#BAE6FD" stroke="#1B1F24" stroke-width="1" />
          <text x="184" y="169" text-anchor="middle" font-size="11" fill="#102A43" font-weight="600">项目部/板房</text>
          <!-- 保安室与实名制门禁 -->
          <rect x="238" y="196" width="38" height="22" fill="#FACC15" stroke="#1B1F24" stroke-width="1.4" />
          <text x="257" y="211" text-anchor="middle" font-size="10" fill="#1B1F24" font-weight="700">门卫</text>
          <rect x="282" y="204" width="12" height="14" fill="#0E7490" stroke="#1B1F24" stroke-width="1.2" />
          <text x="288" y="198" text-anchor="middle" font-size="10" fill="#0E7490">门禁</text>
        </g>

        <!-- 06 建设施工：深基坑支护桩 + 塔吊 + 主体结构 + 外架安全网 + 危大工程红色警示（stageIdx === 5） -->
        <g v-if="stageIdx === 5" class="esg__layer">
          <!-- 深基坑支护桩 -->
          <rect x="318" y="236" width="12" height="44" fill="#64748B" stroke="#1B1F24" stroke-width="1.2" />
          <rect x="610" y="236" width="12" height="44" fill="#64748B" stroke="#1B1F24" stroke-width="1.2" />
          <rect x="330" y="236" width="280" height="24" fill="#CBD5E1" stroke="#1B1F24" stroke-width="1.2" />
          <!-- 主体结构（3层混凝土框架） -->
          <rect x="342" y="104" width="256" height="132" fill="#E2E8F0" stroke="#1B1F24" stroke-width="1.8" />
          <line x1="342" y1="148" x2="598" y2="148" stroke="#1B1F24" stroke-width="2" />
          <line x1="342" y1="192" x2="598" y2="192" stroke="#1B1F24" stroke-width="2" />
          <!-- 柱子 -->
          <line x1="406" y1="104" x2="406" y2="236" stroke="#1B1F24" stroke-width="2" />
          <line x1="470" y1="104" x2="470" y2="236" stroke="#1B1F24" stroke-width="2" />
          <line x1="534" y1="104" x2="534" y2="236" stroke="#1B1F24" stroke-width="2" />
          <!-- 绿色安全网外架 -->
          <rect x="334" y="96" width="272" height="140" fill="rgba(22,163,74,0.14)" stroke="#15803D" stroke-width="1.6" stroke-dasharray="4 3" />
          <!-- 塔式起重机 -->
          <rect x="636" y="34" width="14" height="202" fill="#FACC15" stroke="#1B1F24" stroke-width="1.5" />
          <polygon points="620,42 746,42 746,52 500,52 500,42" fill="#FACC15" stroke="#1B1F24" stroke-width="1.5" />
          <line x1="643" y1="18" x2="515" y2="42" stroke="#1B1F24" stroke-width="1.4" />
          <line x1="643" y1="18" x2="740" y2="42" stroke="#1B1F24" stroke-width="1.4" />
          <line x1="540" y1="52" x2="540" y2="92" stroke="#1B1F24" stroke-width="1.4" />
          <!-- 危大工程红色警示牌（全组件唯一使用 --hd-danger #D63B22） -->
          <rect x="348" y="64" width="244" height="26" rx="4" fill="#D63B22" stroke="#1B1F24" stroke-width="1.4" />
          <text x="470" y="81" text-anchor="middle" font-size="11.5" fill="#FFFFFF" font-weight="700">⚠ 危大工程：深基坑 / 高支模 / 起重吊装</text>
        </g>

        <!-- 07~09 竣工成型建筑：拆架撤吊、完整外立面、室外管网道路（>=6） -->
        <g v-if="stageIdx >= 6" class="esg__layer">
          <!-- 建筑主体与侧翼 2.5D -->
          <rect x="336" y="84" width="268" height="152" fill="#FFFFFF" stroke="#1B1F24" stroke-width="2" />
          <polygon points="604,84 636,102 636,236 604,236" fill="#CBD5E1" stroke="#1B1F24" stroke-width="1.8" />
          <!-- 屋面女儿墙 -->
          <rect x="330" y="74" width="280" height="12" fill="#102A43" stroke="#1B1F24" stroke-width="1.5" />
          <!-- 门窗（09 亮灯暖黄） -->
          <g v-for="row in [104, 146, 188]" :key="row">
            <rect
              v-for="col in [356, 404, 452, 500, 548]"
              :key="col"
              :x="col"
              :y="row"
              width="32"
              height="24"
              :fill="stageIdx === 8 ? '#FEF08A' : '#BAE6FD'"
              stroke="#1B1F24"
              stroke-width="1.3"
            />
          </g>
          <!-- 一层大门 -->
          <rect x="448" y="204" width="44" height="32" fill="#1D4ED8" stroke="#1B1F24" stroke-width="1.5" />
          <!-- 室外道路与管网 -->
          <rect x="140" y="236" width="180" height="8" fill="#64748B" />
          <rect x="650" y="236" width="180" height="8" fill="#64748B" />
        </g>

        <!-- 07 竣工验收横幅 -->
        <g v-if="stageIdx === 6" class="esg__layer">
          <rect x="350" y="42" width="240" height="26" rx="4" fill="#16A34A" stroke="#1B1F24" stroke-width="1.4" />
          <text x="470" y="59" text-anchor="middle" font-size="12" fill="#FFFFFF" font-weight="700">✓ 五方责任主体联合竣工验收</text>
        </g>

        <!-- 08 移交备案：档案盒与钥匙交接 -->
        <g v-if="stageIdx === 7" class="esg__layer">
          <rect x="160" y="188" width="110" height="48" rx="4" fill="#FFFFFF" stroke="#1B1F24" stroke-width="1.5" />
          <rect x="160" y="182" width="110" height="10" fill="#0E7490" stroke="#1B1F24" stroke-width="1.2" />
          <text x="215" y="216" text-anchor="middle" font-size="11.5" fill="#102A43" font-weight="600">城建档案移交</text>
          <rect x="690" y="152" width="128" height="34" rx="4" fill="#FACC15" stroke="#1B1F24" stroke-width="1.4" />
          <text x="754" y="173" text-anchor="middle" font-size="11.5" fill="#1B1F24" font-weight="700">使用登记 · 交钥匙</text>
        </g>

        <!-- 09 运营维护：绿化乔木、保修期与后评价 -->
        <g v-if="stageIdx === 8" class="esg__layer">
          <g v-for="tx in [186, 250, 704, 774]" :key="tx">
            <rect :x="tx - 4" y="206" width="8" height="30" fill="#8A6A2F" stroke="#1B1F24" stroke-width="1" />
            <circle :cx="tx" cy="194" r="18" fill="#16A34A" stroke="#1B1F24" stroke-width="1.4" />
          </g>
          <rect x="336" y="42" width="268" height="24" rx="4" fill="#1D4ED8" stroke="#1B1F24" stroke-width="1.3" />
          <text x="470" y="58" text-anchor="middle" font-size="11.5" fill="#FFFFFF" font-weight="600">保修期（防水5年/采暖2季）· 重大项目后评价</text>
        </g>
      </svg>
    </div>

    <div class="esg__panel">
      <div class="esg__panel-main">
        <div class="esg__panel-head">
          <span class="esg__stage-tag">{{ currentStage.no }} · {{ currentStage.name }}</span>
          <span class="esg__role">{{ currentMeta.role }}</span>
        </div>
        <p class="esg__desc">{{ currentStage.intro }}</p>
        <p class="esg__change"><strong>现场变化：</strong>{{ currentMeta.change }}</p>
        <p v-if="currentMeta.danger" class="esg__danger">{{ currentMeta.danger }}</p>
      </div>
      <a class="esg__cta" :href="withBase(`/engineering-map/stage/${currentStage.id}`)">
        进入本阶段详情页 →
      </a>
    </div>
  </div>
</template>

<style scoped>
.esg {
  margin: 1rem 0 1.6rem;
  padding: 1rem 1.1rem;
  background: var(--hd-card, #ffffff);
  border: 2px solid var(--hd-border, #1b1f24);
  border-radius: 10px;
  box-shadow: 4px 4px 0 var(--hd-border, #1b1f24);
}
.esg__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  margin-bottom: 0.75rem;
}
.esg__title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.94rem;
  color: var(--hd-ink, #1b1f24);
}
.esg__badge {
  display: inline-block;
  padding: 0.16rem 0.55rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: #ffffff;
  background: var(--hd-navy, #102a43);
  border-radius: 4px;
}
.esg__step-btns {
  display: flex;
  gap: 0.45rem;
}
.esg__nav-btn {
  padding: 0.3rem 0.7rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--hd-ink, #1b1f24);
  background: var(--hd-yellow-soft, #fef9c3);
  border: 1.5px solid var(--hd-border, #1b1f24);
  border-radius: 6px;
  cursor: pointer;
}
.esg__nav-btn:hover {
  background: var(--hd-yellow, #facc15);
}
.esg__pills {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  gap: 0.35rem;
  margin-bottom: 0.85rem;
}
.esg__pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.12rem;
  padding: 0.38rem 0.25rem;
  font-size: 0.76rem;
  color: var(--hd-ink, #1b1f24);
  background: var(--hd-paper, #f5f1e6);
  border: 1.5px solid var(--hd-border, #1b1f24);
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.12s ease, background-color 0.12s ease;
}
.esg__pill i {
  font-style: normal;
  font-weight: 700;
  font-size: 0.72rem;
  color: var(--hd-blue, #1d4ed8);
}
.esg__pill span {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.esg__pill.is-passed {
  background: rgba(29, 78, 216, 0.08);
}
.esg__pill.is-active {
  background: var(--hd-blue, #1d4ed8);
  color: #ffffff;
  transform: translateY(-1px);
}
.esg__pill.is-active i {
  color: #fef08a;
}
.esg__pill.is-danger-pill {
  background: var(--hd-danger, #d63b22);
  color: #ffffff;
}
.esg__canvas-wrap {
  border: 1.5px solid var(--hd-border, #1b1f24);
  border-radius: 8px;
  background: #faf8f2;
  overflow: hidden;
}
.esg__svg {
  display: block;
  width: 100%;
  height: auto;
}
.esg__panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1.5px dashed rgba(27, 31, 36, 0.25);
}
.esg__panel-main {
  flex: 1 1 320px;
}
.esg__panel-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
}
.esg__stage-tag {
  padding: 0.14rem 0.5rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  background: var(--hd-blue, #1d4ed8);
  border-radius: 4px;
}
.esg__role {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--hd-cyan, #0e7490);
}
.esg__desc,
.esg__change {
  margin: 0.22rem 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--hd-ink, #1b1f24);
}
.esg__danger {
  margin: 0.35rem 0 0;
  padding: 0.3rem 0.6rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  background: var(--hd-danger, #d63b22);
  border-radius: 5px;
  display: inline-block;
}
.esg__cta {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.95rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff !important;
  background: var(--hd-navy, #102a43);
  border: 1.5px solid var(--hd-border, #1b1f24);
  border-radius: 6px;
  text-decoration: none !important;
  white-space: nowrap;
}
.esg__cta:hover {
  background: var(--hd-blue, #1d4ed8);
}

@media (max-width: 960px) {
  .esg__pills {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 480px) {
  .esg__pills {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (prefers-reduced-motion: reduce) {
  .esg__pill {
    transition: none;
  }
}
</style>
