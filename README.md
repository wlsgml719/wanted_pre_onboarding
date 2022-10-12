# wanted_pre_onboarding
Node.js
## 요구사항 분석

---

#### 1\. 채용공고 등록

-   회사를 등록한 후 채용공고를 등록할 수 있습니다.

#### 2\. 채용공고 수정

-   회사id를 제외한 요청된 값만 수정합니다.

#### 3\. 채용공고 삭제

-   해당 채용공고를 삭제합니다.

#### 4\. 채용공고 상세조회

-   채용내용을 포함한 전체 채용공고를 조회합니다.
-   해당 채용공고는 제외하고 해당 회사에서 올린 채용공고 목록을 포함합니다.

#### 5\. 채용공고 목록조회

-   채용내용을 제외한 채용공고 목록을 조회합니다.

#### 6\. 채용공고 검색

-   회사명과 사용기술에서 키워드로 검색할 수 있습니다.

#### 7\. 채용공고 지원

-   사용자는 채용공고에 1번만 지원할 수 있습니다.

## 데이터 모델 도출

---

#### 회사(company)

```
id(PK) int
name(UK) varchar(255)
```

#### 채용공고(recuirt)

```
id(PK) INT
company_id(FK) INT
country enum
area enum
position varchar(255)
compensation int
content text
skill enum
```

#### 유저(user)

```
id(PK) int
name(UK) varchar(255)
```

#### 유저가 지원한 채용공고(apply)

```
user_id(PK,FK,UK) int
recuirt_id(PK,FK,UK) int
```

## 관계 추출

---

1.  회사(company)와 채용공고(recuirt) - (1:N)
2.  채용공고와 유저(apply) - (N:M)
