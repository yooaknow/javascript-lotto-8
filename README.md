# javascript-lotto-precourse


## 기능 요구사항 (레이어별 체크)

### Domain Layer
**Lotto.js**
- [x] 로또 한 장 생성 (6개 숫자)
- [x] 중복 및 1~45 범위 검증

**WinCondition.js**
- [x] 당첨 번호와 비교하여 등수 판정 (1~5등, 보너스 적용)

**Statistics.js**
- [x] 등수별 누적 집계
- [x] 총 상금 계산
- [x] 수익률 계산 (소수점 둘째 자리 반올림)

### Service Layer
**LottoGenerator.js**
- [x] N장 로또 발행 (1~45, 중복 없는 6개)
- [x] Random.pickUniqueNumbersInRange 사용

**GameService.js**
- [ ] 게임 진행 흐름 구현 (입력 → 발행 → 당첨 판정 → 통계)

### Util Layer
**Validator.js**
- [x] 구입 금액 1,000원 단위 검증
- [x] 당첨 번호 형식/중복/범위 검증
- [x] 보너스 번호 중복/범위 검증

### View Layer
**InputView.js / OutputView.js**
- [ ] 사용자 입력/출력 UI 구현

### App Layer
**App.js**
- [ ] run() 시작점, 서비스+도메인+뷰 연결
- [ ] MissionUtils.Random / Console 입출력

---

### 전체 기능 체크리스트

- [x] 구입 금액 입력받기(1,000원 단위 검증)
- [x] 로또 N장 발행(1~45, 중복 없는 6개, 오름차순)
- [x] 발행 개수 + 각 로또 번호 출력
- [x] 당첨 번호 6개, 보너스 번호 입력 받기(형식/중복/범위 검증)
- [x] 각 로또와 당첨 번호 비교하여 등수 집계
- [x] 총 수익/수익률 계산(소수점 둘째 자리 반올림)
- [ ] App.run() 시작점, MissionUtils.Random/Console 사용
- [ ] InputView.js / OutputView.js: 사용자 입력/출력 UI 연결