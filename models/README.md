## mongodb schema 구조
<pre>
maindb - users - collection(name, action, time)
</pre>
#### name
<pre>
type : String
wifi 등록 웹페이지에서 입력한 사용자 정보를 collection에 담음
</pre>
#### action
<pre>
type : Number
적외선 센서에서 넘어온 데이터를 number로 저장(세척 횟수)
</pre>
#### time
<pre>
센서 데이터가 서버로 넘어와 db에 저장되는 시간을 저장
</pre>