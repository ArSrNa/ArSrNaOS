import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { TriangleIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GetInfo, { StockData } from 'tencent-stock-api';

export default function Stock() {
    const [code, setCode] = useState('sh600839');
    const [result, setResult] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const code = router.query.stockcode as string;
        if (code) {
            setCode(code as string)
            GetInfo([code as string]).then(res => {
                setResult(res[0]);
            })
        } else {
            setCode('sh000001');
            GetInfo(['sh000001']).then(res => {
                setResult(res[0]);
            })
        }
    }, [router.query.stockcode]);

    function changeCode(code: string) {
        router.push({
            pathname: router.pathname,
            query: {
                stockcode: code
            }
        }).then(() => {
            setCode(code);
            GetInfo([code]).then(res => {
                setResult(res[0]);
            });
        });
    }


    return <div className="relative">
        <div>以<b>交易所+股票代码</b>的形式。例如：
            <br />
            上海证券交易所：<a onClick={() => changeCode('sh000001')}>sh000001</a>（上证指数）
            <br />
            上海证券交易所：<a onClick={() => changeCode('sh688795')}>sh688795</a>（摩尔线程）
            <br />
            深圳证券交易所：<a onClick={() => changeCode('sz399001')}>sz399001</a>（深证成指）
            <br />
            香港交易所：<a onClick={() => changeCode('hkHSI')}>hkHSI</a>（恒生指数）
            <br />
            纳斯达克交易所：<a onClick={() => changeCode('usIXIC')}>usIXIC</a>（纳斯达克指数）
        </div>

        <div>
            文档与源代码请见：<a href="https://cnb.cool/arsrna/os/tencent-stock-api" target="_blank">https://cnb.cool/arsrna/os/tencent-stock-api</a>
            <br />
            历史数据（来自CNB）：<a href="https://cnb.cool/xgz/arsrna/stock-history" target="_blank">https://cnb.cool/xgz/arsrna/stock-history</a>
        </div>
        <div className="flex gap-3 sticky top-[60px] left-0 right-0 bg-white/20 backdrop-blur-lg z-10 p-2 mx-[-15px]">
            <Input placeholder="股票代码" value={code} onChange={e => setCode(e.target.value)} />
            <Button onClick={() => changeCode(code)}>查询</Button>
        </div>
        <Textarea className="h-50" value={JSON.stringify(result, null, 2)} />
        <Separator className="my-2" />
        <Result result={result} />

    </div>
}

function Result({ result }: { result: StockData }) {
    if (!result) {
        return <div className="text-center h-100">请输入股票代码</div>;
    }

    const isUp = result.priceChange >= 0;
    const priceChangeClass = isUp
        ? "text-rose-600"
        : "text-emerald-600"
    const priceChangeIcon = isUp ? "▲" : "▼";


    function Statistics({ title, value }: { title: string, value: number }) {
        return <div className="border border-gray-300 px-4 py-2 flex flex-col items-left gap-1 rounded-sm">
            <h1 className="text-sm font-medium text-slate-500">{title}</h1>
            <p className="text-xl font-semibold">{value.toLocaleString()}</p>
        </div>
    }

    /**买卖5档 */
    function SB5Info({ info }: { info: 'buyOrders' | 'sellOrders' }) {
        const refer = Math.max(...result[info].map(m => m.volume));
        return <div className="flex flex-col py-2 gap-3">
            {result[info].sort((a, b) => b.price - a.price).map((order, index) => (
                <div className="relative h-6" key={`buy-${index}`}>
                    <div className={`${info === 'buyOrders' ? 'bg-rose-300' : 'bg-emerald-300'}
                    h-full rounded-md transition-all transition-duration-300
                    absolute right-0 z-0`}
                        style={{ width: `${order.volume / refer * 100}%` }} />
                    <div className="flex h-full items-center relative z-1 mx-3">
                        <div className="font-medium grid grid-cols-[20px_auto] items-center">
                            <TriangleIcon className={`rotate-90 opacity-${refer === order.volume ? 100 : 0}`} size={15} />
                            <span>{order.price.toFixed(2)}</span>
                        </div>
                        <div className="ml-auto">
                            {order.volume.toFixed(2)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    }

    return <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">
        <Card className="max-w-7xl mx-auto px-10 shadow-lg">
            {/* 头部信息 */}
            <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                        <div className="flex items-center gap-2">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                {result.name}
                                <Badge variant="outline" className="text-sm">
                                    {result.code}
                                </Badge>
                            </CardTitle>
                        </div>
                        <CardDescription>
                            更新时间：{result.time}
                        </CardDescription>
                    </div>

                    {/* 价格信息 */}
                    <div className="mt-2 md:mt-0 flex flex-col items-end">
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold">{result.currentPrice.toFixed(2)}</span>
                            <span className={`${priceChangeClass} font-medium flex items-center`}>
                                {priceChangeIcon} {Math.abs(result.priceChange).toFixed(2)}
                                ({Math.abs(result.priceChangePercent).toFixed(2)}%)
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="my-5" />

            <h1 className="text-2xl font-bold">基础行情数据</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Statistics title="今开" value={result.openPrice} />
                <Statistics title="昨收" value={result.preClose} />
                <Statistics title="最高" value={result.highest} />
                <Statistics title="最低" value={result.lowest} />
                <Statistics title="成交量" value={result.volume} />
                <Statistics title="成交额(万)" value={result.turnover} />
                <Statistics title="涨停价" value={result.limitUpPrice} />
                <Statistics title="跌停价" value={result.limitDownPrice} />
            </div>

            <Separator className="my-5" />

            <h1 className="text-2xl font-bold">交易数据</h1>
            <Card className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <CardHeader>
                        <CardTitle className="text-lg">五档（手）</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col px-4 py-2">
                            <SB5Info info='sellOrders' />
                            <Separator />
                            <SB5Info info='buyOrders' />
                        </div>
                    </CardContent>
                </div>

                <div>
                    <CardHeader>
                        <CardTitle className="text-lg">盘口统计</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-10">
                            <div className="space-y-2">
                                <p className="text-sm text-slate-500">外盘(手)</p>
                                <p className="text-xl font-semibold text-emerald-600">
                                    {result.outerVolume.toLocaleString()}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-slate-500">内盘(手)</p>
                                <p className="text-xl font-semibold text-rose-600">
                                    {result.innerVolume.toLocaleString()}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-slate-500">外内盘比</p>
                                <p className="text-xl font-semibold">
                                    {(result.outerVolume / result.innerVolume).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>

            <h1 className="text-2xl font-bold">关键指标</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Statistics title="换手率(%)" value={result.turnoverRate} />
                <Statistics title="市盈率(TTM)" value={result.pe} />
                <Statistics title="市净率" value={result.pb} />
                <Statistics title="振幅(%)" value={result.amplitude} />
                <Statistics title="流通市值(亿)" value={result.circulateMarketValue} />
                <Statistics title="总市值(亿)" value={result.totalMarketValue} />

            </div>


            <CardFooter className="border-t pt-4 text-sm text-slate-500">
                <p>数据仅供参考，不构成投资建议 | 最后更新时间: {result.time}</p>
            </CardFooter>
        </Card>
    </div>
}