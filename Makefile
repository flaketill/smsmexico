test-install:
	npm install smsmexico -g

install:
	npm install ./

test:
	./node_modules/

test_exist:
	npm ls -g | grep "grunt"

.PHONY: test