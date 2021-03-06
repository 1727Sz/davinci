import ChartTypes from './ChartTypes'
import {
  PIVOT_CHART_FONT_FAMILIES,
  PIVOT_DEFAULT_FONT_COLOR,
  CHART_PIE_LABEL_POSITIONS
} from '../../../../globalConstants'

import { IChartInfo } from '../../../../containers/Widget/components/Widget'
const radar: IChartInfo = {
  id: ChartTypes.Radar,
  name: 'radar',
  title: '雷达图',
  icon: 'icon-radarchart',
  coordinate: 'cartesian',
  requireDimetions: 1,
  requireMetrics: [1, 9999],
  dimetionAxis: 'col',
  data: {
    color: {
      title: '颜色',
      type: 'category'
    }
    // tip: {
    //   title: '提示信息',
    //   type: 'value'
    // }
  },
  style: {
    label: {
      showLabel: true,
      labelFontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      labelFontSize: '12',
      labelColor: PIVOT_DEFAULT_FONT_COLOR
    },
    legend: {
      showLegend: true,
      legendPosition: 'right',
      selectAll: true,
      fontFamily: PIVOT_CHART_FONT_FAMILIES[0].value,
      fontSize: '12',
      color: PIVOT_DEFAULT_FONT_COLOR
    },
    spec: {
      shape: 'polygon' // 'polygon' | 'circle'
    }
    // toolbox: {
    //   showToolbox: false
    // }
  }
}

export default radar
