.PHONY: deploy deploy-staging

REMOTE := deploy@racknerd
LOCAL_DIST := ./dist/
REMOTE_PATH := /var/www/html/guilsa.com

STAGING_REMOTE := gui@staging-guilsa-com.dmz.home.arpa
STAGING_PATH   := /var/www/html/staging.guilsa.com

deploy:
	ssh $(REMOTE) "sudo mkdir -p $(REMOTE_PATH) && sudo chown deploy:www-data $(REMOTE_PATH) && sudo chmod 775 $(REMOTE_PATH)"
	rsync -avz --delete --no-perms --no-times \
		-e ssh \
		$(LOCAL_DIST) $(REMOTE):$(REMOTE_PATH)
	ssh $(REMOTE) "sudo chown -R deploy:www-data $(REMOTE_PATH) && sudo chmod -R 775 $(REMOTE_PATH)"

deploy-staging:
	ssh $(STAGING_REMOTE) "mkdir -p $(STAGING_PATH)"
	rsync -avz --delete --no-perms --no-times \
		-e ssh \
		$(LOCAL_DIST) $(STAGING_REMOTE):$(STAGING_PATH) 