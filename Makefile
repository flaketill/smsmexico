test:
	./node_modules/

test_exist:
	npm ls -g | grep "grunt"

.PHONY: test