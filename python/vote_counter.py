# 투표 결과 리스트
votes = ['김영자', '강승기', '최만수', '김영자', '강승기', '강승기', '최만수', '김영자', \
         '최만수', '김영자', '최만수', '김영자', '김영자', '최만수', '최만수', '최만수', '강승기', \
         '강승기', '김영자', '김영자', '최만수', '김영자', '김영자', '강승기', '김영자']

# 후보별 득표수 사전
vote_counter = {}

# 리스트 votes를 이용해서 사전 vote_counter를 정리하기
yj_count, sk_count, ms_count = 0, 0, 0
for name in votes:
    # 코드를 작성하세요.
    if name == "김영자":
        yj_count += 1
        vote_counter["김영자"] = yj_count

    elif name == "강승기":
        sk_count += 1
        vote_counter["강승기"] = sk_count

    elif name == "최만수":
        ms_count += 1
        vote_counter["최만수"] = ms_count

# 후보별 득표수 출력
print(vote_counter)
