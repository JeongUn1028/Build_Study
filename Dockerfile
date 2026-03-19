
#* 2 리눅스, node, npm, yarn 설치된 이미지
FROM node:20

COPY ./package.json /myFolder/
COPY ./yarn.lock /myFolder/
WORKDIR /myFolder/
RUN yarn install

#* 3 작업 디렉토리 설정
COPY . /myFolder/
RUN yarn build

CMD npx serve@latest out