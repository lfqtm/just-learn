import CountUI from '../../components/Count'
import store from '../../redux/store'
import { connect } from 'react-redux'
// connect()()创建并暴露一个容器组件
export default connect()(CountUI)