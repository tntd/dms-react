import React, { useState, Fragment } from 'react';
import { Radio, Alert } from 'antd';
import SqlHistory from '../SqlHistory';
import Results from './Results';
import DetailModal from '../../components/RowDetailModal';

export default props => {
    const { querySqlInfo, setQuerySqlInfo, sqlHistoryList } = props;
    const { querySqlText, schema = [], content = [], resultTab = 'history', errorInfo } = querySqlInfo;
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [detailItem, setDetailItem] = useState({});

    return (
        <div className="table-content">
            <Radio.Group
                value={resultTab || undefined}
                size="middle"
                onChange={(e) => {
                    setQuerySqlInfo({
                        ...querySqlInfo,
                        resultTab: e.target.value
                    })
                }}
            >
                <Radio.Button value="history">执行历史</Radio.Button>
                <Radio.Button value="result">执行结果</Radio.Button>
                <Radio.Button value="message">消息</Radio.Button>
            </Radio.Group>
            {
                resultTab === "history" &&
                <SqlHistory
                    sqlHistoryList={sqlHistoryList}
                    querySqlInfo={querySqlInfo}
                    setQuerySqlInfo={setQuerySqlInfo}
                />
            }
            {
                resultTab === "result" && (
                    <Results
                        data={content}
                        setDetailModalVisible={setDetailModalVisible}
                        setDetailItem={setDetailItem}
                    />
                )
            }
            {
                resultTab === "message" &&
                <div>
                    {
                        errorInfo &&
                        errorInfo.code &&
                        <Alert
                            message="SQL执行错误"
                            description={
                                <Fragment>
                                    <div>
                                        <span>code：</span>
                                        {errorInfo.code}
                                    </div>
                                    <div>
                                        <span>errorNo：</span>
                                        {errorInfo.errno}
                                    </div>
                                    <div>
                                        <span>sqlState：</span>
                                        {errorInfo.sqlState}
                                    </div>
                                    <div>
                                        <span>sqlMessage：</span>
                                        {errorInfo.sqlMessage}
                                    </div>
                                    <div>
                                        <span>sql：</span>
                                        {errorInfo.sql}
                                    </div>
                                </Fragment>
                            }
                            type="error"
                        />

                    }
                    {
                        !errorInfo &&
                        <Fragment>
                            <div>【执行SQL】</div>
                            <div>{querySqlText}</div>
                            <div>执行成功，当前返回：[{content.length}]行。</div>
                        </Fragment>
                    }
                </div>
            }
            <DetailModal
                visible={detailModalVisible}
                schema={schema || []}
                detailItem={detailItem}
                onCancel={() => {
                    setDetailModalVisible(false)
                }}
                afterClose={() => {
                    setDetailItem({})
                }}
            />
        </div>
    );
}
